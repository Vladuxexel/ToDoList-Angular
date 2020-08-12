import { Component, OnInit } from '@angular/core';
import { ModalService } from '../_modal';

interface Task{
  id: number,
  name: string,
  description: string
};

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  onEdit: number = -1;
  id: number = 0;
  name: string = '';
  description: string = '';
  list: Task[];

  constructor(public modalService: ModalService) { 
  }

  ngOnInit(): void {
    this.list = [];
  }

  addNewTask(){
    if(this.name != '' && this.description != ''){
      if(this.onEdit != -1){
        this.list[this.onEdit].name = this.name;
        this.list[this.onEdit].description = this.description;
      }
      else{
        this.list.push({id: this.id, name: this.name, description: this.description});
        this.id += 1;
      }
      this.name = '';
      this.description = '';
      this.modalService.close('modal-1');
    }
    else{
      alert('Введите данные!');
    }
  }

  editTask(item){
    this.onEdit = this.list.findIndex(function(task){
      return task.id === item.id;
    });
    this.name = item.name;
    this.description = item.description;
    this.modalService.open('modal-1');
  }

  deleteTask(item){
    const index = this.list.findIndex(function(task){
      return task.id === item.id;
    });
    for(let element of this.list){
      if(element.id === this.list[index].id){
        this.list.splice(index, 1);
        break;
      }
    }
  }

}
