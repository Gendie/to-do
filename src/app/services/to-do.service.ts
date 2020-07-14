import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { ToDoItem } from '../models';

@Injectable({
    providedIn: "root"
})
export class ToDoService {

    public getToDoList(): Observable<ToDoItem[]> {
        return of([
            {
                title: "Buy new sweatshirt",
                isDone: true
            }, {
                title: "Begin promotion phase",
                isDone: true
            }, {
                title: "Read an article",
                isDone: false
            }, {
                title: "Try not to fall asleap",
                isDone: false
            }, {
                title: "Watch 'Sherlock'",
                isDone: false
            }, {
                title: "Begin QA for production",
                isDone: false
            }, {
                title: "Go fot a walk",
                isDone: false
            }
        ]).pipe(take(1));
    }

}