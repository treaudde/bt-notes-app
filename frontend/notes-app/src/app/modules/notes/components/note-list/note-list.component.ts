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
  noteCount = 0;
  loaded = false;

  constructor(private noteService: NoteService) {
    this.notes = [];
  }

  ngOnInit() {
    this.loadNotes();
  }

  loadNotes() {

    this.noteService.getNotes().subscribe((response) => {
      this.loaded = true;
      this.notes = response;
      this.noteCount = this.notes.length;
    }, (error) => {
      console.log(error)
    });
  }
}

