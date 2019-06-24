import {Component, EventEmitter, Output} from '@angular/core';
import {Input} from "@angular/core";
import {Note} from "../../entities/note";
import {NoteService} from "../../services/note.service";
import {Router} from "@angular/router";

@Component({
    selector: 'note',
    templateUrl: './note.component.html',
    styleUrls: ['./note.component.css']
})
export class NoteComponent {
    @Input() note : Note;
    @Output() deleted  = new EventEmitter<any>();
    constructor(private noteService: NoteService, private router: Router) {

    }

    deleteNote(note) {
        if(confirm('Are you sure?')) {
            this.noteService.deleteNote(note).subscribe((response) => {
            this.deleted.emit('');

            }, (error) => {
                console.log(error);
            });
        }
    }
}

