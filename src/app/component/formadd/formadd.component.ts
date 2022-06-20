
import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { TodoListService } from 'src/app/todo-list.service';
;
@Component({
  selector: 'app-formadd',
  templateUrl: './formadd.component.html',
  styleUrls: ['./formadd.component.scss']
})
export class FormaddComponent implements OnInit {
  formValue:string='';
  
  constructor(private todoService:TodoListService) { }

  ngOnInit(): void {
    console.log(this.formValue)

  }

  onClick=()=>{
    if(this.formValue){
      console.log(this.formValue)
     
      this.todoService.todoList.push(this.formValue)
      // console.log(this.todoService.todoList.length)
    }
    
  }
}
