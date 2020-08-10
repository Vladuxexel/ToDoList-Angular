import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.css']
})
export class AddDialogComponent implements OnInit {

  visible: boolean = true;
  
  constructor() { }
  
  ngOnInit(): void {
  }
}
