import { Injectable } from '@angular/core';
import {Note} from "../entities/note";

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  notes: Note[]

  constructor() {
    this.notes = [];
    this.generateNotes();
  }

  getNotes() {
    return this.notes.slice();
  }

  getNote(noteId: Number) {
  }

  updateNote(note : Note) {

  }

  deleteNote(note : Note) {

  }

  generateNotes() {
    for(let x = 1; x<=10; x++) {
      this.notes.push(new Note((x+1), `Note ${x}`, `Lorem Ipsum Dolor sit amet ${x}`))
    }
  }
}
