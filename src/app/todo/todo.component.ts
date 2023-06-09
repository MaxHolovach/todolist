import { Component } from '@angular/core';
import { Itodoitem,  TODO_MOCK } from '../model/todolistitem';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  inputTodoItem: Itodoitem={
    iscomplete:false,
    isimportant:false,
    text:'',
    deadline: new Date()

  };
  sortimportant = true;
  todolist:Itodoitem[]=TODO_MOCK;

  sortbyimportant(): void {
    if (this.sortimportant)
    this.todolist.sort(
      (a,b)=>
        (a.isimportant===b.isimportant)?0
        :(a.isimportant===true)?1:-1)
        else
        this.todolist.sort(
          (a,b)=>
            (a.isimportant===b.isimportant)?0
            :(a.isimportant===true)?-1:1)


    this.sortimportant = !this.sortimportant;
  }
addTodoItem():void{
  this.todolist.push({...this.inputTodoItem});
}
deleteitem(todoitem:Itodoitem):void{
  let index = this.todolist.indexOf(todoitem); // return -1 if not found
  if (index != -1)
    this.todolist.splice(index, 1);
}
}
