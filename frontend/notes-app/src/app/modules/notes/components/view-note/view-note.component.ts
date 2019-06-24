import { Component } from '@angular/core';
import {Note} from "../../entities/note";
import {switchMap} from "rxjs/operators";
import {ActivatedRoute, Router} from "@angular/router";
import {NoteService} from "../../services/note.service";


@Component({
  selector: 'view-note',
  templateUrl: './view-note.component.html',
  styleUrls: ['./view-note.component.css']
})

export class ViewNoteComponent {
  note: Note;

  constructor(
      private router: Router,
      private route: ActivatedRoute,
      private noteService : NoteService
    ) {

  }

  ngOnInit() {
    let noteId : Number = parseInt(this.route.snapshot.paramMap.get('id'));
    this.noteService.getNote(noteId).subscribe((response) => {
      this.note = response;
    });
  }
}

