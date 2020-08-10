import { Component, OnInit } from '@angular/core';
import { AddDialogComponent } from '../add-dialog/add-dialog.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public dialog = new AddDialogComponent();

  constructor() { 
    this.dialog.visible = false;
  }

  ngOnInit(): void {
  }

  activateDialog(){
    alert("Dialog is active!");
  }

}
