import { Component } from '@angular/core';
import { TodosService } from './todos.service';
import { Todo } from './todo';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    todos: Todo[];

    constructor(private tds: TodosService) {
        this.tds.getAllTodos()
            .subscribe(val => this.todos = val);
    }

    delete(key) {
        this.tds.deleteTodo(key);
    }
}
