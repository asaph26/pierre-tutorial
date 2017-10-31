import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';

@Component({
    selector: 'app-todo-entry',
    templateUrl: './todo-entry.component.html',
    styleUrls: ['./todo-entry.component.css']
})
export class TodoEntryComponent implements OnInit {

    constructor(private tds: TodosService) { }

    ngOnInit() {
    }

    save(text: string) {
        this.tds.createTodo({ text: text });
    }
}
