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
    this.notes = [];
  }

  ngOnInit() {
    this.noteService.getNotes().subscribe((response) => {
      let data: any =  response.body;
      console.log(response);
      data.forEach((note) => {
          this.notes.push(new Note(note.id, note.note_title, note.note_text));
      });

      this.noteCount = this.notes.length;
    }, (error) => {
        console.log(error)
    });


  }

}

