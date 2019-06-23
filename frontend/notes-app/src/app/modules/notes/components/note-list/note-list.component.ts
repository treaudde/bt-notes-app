import { Component } from '@angular/core';
import {NoteService} from "../../services/note.service";
import {Note} from "../../entities/note";

@Component({
  selector: 'note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css'],
  providers: [NoteService]

})
export class NoteListComponent {

  notes : Note[]
  noteService : NoteService;
  noteCount = 0;

  constructor(noteService: NoteService) {
    this.noteService = noteService;
  }

  ngOnInit() {
    this.notes = this.noteService.getNotes();

    console.log(this.notes);
    this.noteCount = this.notes.length;
  }

}

