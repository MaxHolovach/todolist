import { Component, Input } from '@angular/core';
import { Itodoitem } from '../model/todolistitem';


@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {
  @Input()
  todoitem:Itodoitem={
    iscomplete:false,
    isimportant:false,
    text:'',
    deadline:new Date()
  } ;
  changeStatus(item:Itodoitem):void{
item.iscomplete=!item.iscomplete;
  }
}


