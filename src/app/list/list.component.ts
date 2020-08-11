import { Component, OnInit } from '@angular/core';
import { ModalService } from '../_modal';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(public modalService: ModalService) { 
  }

  ngOnInit(): void {
  }

  activateDialog(){
    alert("Dialog is active!");
  }

}
