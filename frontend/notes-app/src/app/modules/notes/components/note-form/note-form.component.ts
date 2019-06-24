import {Component, ElementRef, ViewChild} from '@angular/core';
import {NoteService} from "../../services/note.service";
import {Note} from "../../entities/note";
import {NgForm} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.css']
})
export class NoteFormComponent {

  note : Note;
  editing : boolean;
  @ViewChild('submitButton', {static: false}) submitButton : ElementRef<HTMLElement>;

  constructor(private noteService : NoteService,
              private route : ActivatedRoute,
              private router : Router) {
    this.editing = false;
    this.note = new Note();
  }

  ngOnInit() {
    let noteId : any = parseInt(this.route.snapshot.paramMap.get('id'));
    if (!isNaN(noteId)) { // new element - find cleaner way
      this.editing = true;
      this.route.data
          .subscribe((data: { note: Note }) => {
            this.note = data.note
          });
    }
  }

  saveNote(noteForm : NgForm){
    if(this.editing){
      this.submitButton.nativeElement.innerText = 'Editing note...';
      this.updateNote(this.note);
    }
    else {
      this.submitButton.nativeElement.innerText = 'Saving new note...';
      this.addNote(this.note);
    }
  }

  addNote(note : Note) {
    this.noteService.addNote(note).subscribe((response) => {
      this.router.navigate(['/notes'])
    }, (error) => {
      console.log(error);
    })
  }


  updateNote(note : Note) {
    this.noteService.updateNote(note).subscribe((response) => {
      this.router.navigate(['/notes'])
    }, (error) => {
      console.log(error);
    })
  }

}

