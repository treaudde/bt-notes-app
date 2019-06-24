import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NoteListComponent} from "./components/note-list/note-list.component";
import {ViewNoteComponent} from "./components/view-note/view-note.component";
import {NoteFormComponent} from "./components/note-form/note-form.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/notes',
    pathMatch: 'full'
  },

  {
    path: 'notes',
    component: NoteListComponent
  },

  {
    path: 'note/add',
    component: NoteFormComponent,
  },

  {
    path: 'note/:id',
    component: ViewNoteComponent,
  },

  {
    path: 'note/edit/:id',
    component: NoteFormComponent
  },

  {
    path: '**',
    redirectTo: '/notes'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class NotesRoutingModule { }
