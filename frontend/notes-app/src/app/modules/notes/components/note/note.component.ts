import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
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
    @ViewChild('deleteLink', {static:false}) deleteLink : ElementRef<HTMLElement>;

    constructor(private noteService: NoteService, private router: Router) {

    }

    deleteNote(note) {
        if(confirm('Are you sure?')) {
            this.deleteLink.nativeElement.innerText = 'Deleting...'
            this.noteService.deleteNote(note).subscribe((response) => {

                this.deleted.emit('');

            }, (error) => {
                console.log(error);
            });
        }
    }
}

