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
    this.route.data
        .subscribe((data: { note: Note }) => {
          this.note = data.note
        });
  }
}

