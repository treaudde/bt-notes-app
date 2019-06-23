import { Component } from '@angular/core';
import {Input} from "@angular/core";
import {Note} from "../../entities/note";

@Component({
  selector: 'note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent {
    @Input() note : Note;
}

