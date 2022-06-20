import { Component, OnInit ,Input} from '@angular/core';
import { TodoListService } from 'src/app/todo-list.service';

@Component({
  selector: 'app-added-todo',
  templateUrl: './added-todo.component.html',
  styleUrls: ['./added-todo.component.scss']
})
export class AddedTodoComponent implements OnInit {
 
@Input () addedData:string='';
todoList:Array<string>=[];
index:number=0;
isChecked:boolean=false;
checkClass:string=' fa-check'
closeClass:string=' fa-close'
  constructor(private todoService:TodoListService) { }


  ngOnInit(): void {
    this.todoList=this.todoService.todoList;
    console.log(this.todoList.length)
  }

  closeOnClick=(value:any)=>{
    this.index=this.todoList.indexOf(value);
    // console.log(this.todoList.indexOf(value))
    
    this.todoList.splice(this.index,1);
    console.log(this.todoList.length)
    console.log(this.todoService.todoList.length)

  }
  checkOnClick=()=>{

    this.isChecked=! this.isChecked;
  }

}
