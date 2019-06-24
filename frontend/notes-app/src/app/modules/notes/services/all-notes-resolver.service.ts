import { Injectable } from '@angular/core';
import {Router, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable, of, EMPTY} from "rxjs";
import {mergeMap, take} from "rxjs/operators";

import {NoteService} from "./note.service";
import {Note} from "../entities/note";

@Injectable({
  providedIn: 'root'
})

export class AllNotesResolverService implements Resolve<Note[]> {
    constructor(private noteService: NoteService, private router: Router) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Note[]> | Observable<never> {
        return this.noteService.getNotes().pipe(
            take(1),
            mergeMap(notes => {
                if (notes) {
                    return of(notes);
                } else { // id not found
                    console.log('Cannot retrieve notes');
                    alert('Cannot retrieve notes');
                    return EMPTY;
                }
            })
        );
    }
}