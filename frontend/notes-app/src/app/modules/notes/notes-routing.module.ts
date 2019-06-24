import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NoteListComponent} from "./components/note-list/note-list.component";
import {ViewNoteComponent} from "./components/view-note/view-note.component";
import {NoteFormComponent} from "./components/note-form/note-form.component";
import {NoteResolverService} from "./services/note-resolver.service";
import {AllNotesResolverService} from "./services/all-notes-resolver.service";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/notes',
    pathMatch: 'full'
  },

  {
    path: 'notes',
    component: NoteListComponent,
    resolve: {
      note: AllNotesResolverService
    }
  },

  {
    path: 'note/add',
    component: NoteFormComponent,
  },

  {
    path: 'note/:id',
    component: ViewNoteComponent,
    resolve: {
      note: NoteResolverService
    }
  },

  {
    path: 'note/edit/:id',
    component: NoteFormComponent,
    resolve: {
      note: NoteResolverService
    }
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
