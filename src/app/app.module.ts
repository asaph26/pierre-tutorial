import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoEntryComponent } from './todo-entry/todo-entry.component';
import { TodosService } from './todos.service';
import { MatInputModule, MatButtonModule, MatListModule, MatToolbarModule, MatCardModule } from '@angular/material';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import 'rxjs/add/operator/map';
@NgModule({
    declarations: [
        AppComponent,
        TodoEntryComponent
    ],
    imports: [
        BrowserModule,
        MatInputModule, MatButtonModule, MatListModule, MatToolbarModule, MatCardModule,
        BrowserAnimationsModule,
        AngularFireDatabaseModule,
        AngularFireModule.initializeApp({
            apiKey: 'AIzaSyCLozEmxYC_84NTrabIB80FD9qrc5genrg',
            authDomain: 'todo-pierre.firebaseapp.com',
            databaseURL: 'https://todo-pierre.firebaseio.com',
            projectId: 'todo-pierre',
            storageBucket: 'todo-pierre.appspot.com',
            messagingSenderId: '80693944663'
        })
    ],
    providers: [TodosService],
    bootstrap: [AppComponent]
})
export class AppModule { }
