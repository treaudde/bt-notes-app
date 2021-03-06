import { Injectable } from '@angular/core';
import {Note} from "../entities/note";
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  notes: Note[];
  apiUrlHost: string;

  constructor(private http: HttpClient) {
    this.notes = [];
    this.apiUrlHost = environment.notesApiHost;
  }

  getNotes() {
    return this.http.get<Note[]>(this.apiUrlHost + '/api/notes');
  }

  getNote(noteId: Number) {
    return this.http.get<Note>(this.apiUrlHost + `/api/notes/${noteId}`);
  }

  addNote(note : Note) {
    return this.http.post(this.apiUrlHost + '/api/notes', note)
  }

  updateNote(note : Note) {
    return this.http.put(this.apiUrlHost + `/api/notes/${note.id}`, note)
  }

  deleteNote(note : Note) {
    return this.http.delete(this.apiUrlHost + `/api/notes/${note.id}`, {observe: 'response'})
  }
}
