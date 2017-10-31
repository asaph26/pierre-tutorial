import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class TodosService {
    private url = 'todos';

    constructor(private fbs: AngularFireDatabase) { }

    createTodo(todo: Todo) {
        this.fbs.list(this.url).push(todo);
    }

    deleteTodo(todoKey: string) {
        this.fbs.list(this.url).remove(todoKey);
    }

    getAllTodos(): Observable<Todo[]> {
        return this.fbs.list(this.url).snapshotChanges().map(val => {
            return val.map(action => {
                const id = action.payload.key;
                const data = { id, ...action.payload.val() };
                return data;
            });
        });
    }
}
