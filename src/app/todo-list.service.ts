import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  todoList:Array<string>=[];
  constructor() { }
}
