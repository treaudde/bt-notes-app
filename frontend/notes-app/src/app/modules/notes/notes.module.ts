import { NgModule } from '@angular/core';
import {NoteListComponent} from "./components/note-list/note-list.component";
import {NoteService} from "./services/note.service";
import {NoteComponent} from "./components/note/note.component";
import {CommonModule} from "@angular/common";
import {NoteFormComponent} from "./components/note-form/note-form.component";
import {ViewNoteComponent} from "./components/view-note/view-note.component";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [NoteListComponent, NoteComponent, NoteFormComponent, ViewNoteComponent],
  imports: [CommonModule, HttpClientModule, RouterModule, FormsModule],
  exports: [NoteListComponent, NoteFormComponent, ViewNoteComponent],
  providers: [NoteService]
})
export class NotesModule { }
