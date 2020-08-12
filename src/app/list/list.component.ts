import { Component, OnInit } from '@angular/core';
import { ModalService } from '../_modal';

interface Task{
  name: string,
  description: string
};

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

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
      this.list.push({name: this.name, description: this.description});
      this.name = '';
      this.description = '';
      this.modalService.close('modal-1');
    }
    else{
      alert('Введите данные!');
    }
  }

}
