import { Component, OnInit } from '@angular/core';
import { TodoListService } from 'src/app/todo-list.service';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  formValue:string='';
  todoes:Array<string>=[];

  getFormData=(value:any)=>{
    this.formValue=value;
  
    
  }
  constructor(private todoListservice:TodoListService) { }

  ngOnInit(): void {
    this.todoes=this.todoListservice.todoList;
  }

  // ngAfterViewInit():void{
  //   console.log(this.todoes)
  // }
}
