import { Injectable } from '@angular/core';
import {Router, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable, of, EMPTY} from "rxjs";
import {mergeMap, take} from "rxjs/operators";

import {NoteService} from "./note.service";
import {Note} from "../entities/note";

@Injectable({
  providedIn: 'root'
})
export class NoteResolverService implements Resolve<Note> {
  constructor(private noteService: NoteService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Note> | Observable<never> {
    let id = parseInt(route.paramMap.get('id'));

    return this.noteService.getNote(id).pipe(
        take(1),
        mergeMap(note => {
          if (note) {
            return of(note);
          } else { // id not found
            this.router.navigate(['/notes']);
            return EMPTY;
          }
        })
    );
  }
}
