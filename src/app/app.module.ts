import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './component/todo/todo.component';
import { FormaddComponent } from './component/formadd/formadd.component';
import { AddedTodoComponent } from './component/added-todo/added-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    FormaddComponent,
    AddedTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
