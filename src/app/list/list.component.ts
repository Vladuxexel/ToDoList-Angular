import { Component, OnInit } from '@angular/core';
import { ModalService } from '../_modal';

interface Task {
  id: number;
  name: string;
  description: string;
}

interface PageControl {
  id: number;
  isActive: boolean;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  private onEdit: number = -1;
  private id: number = 0;
  public name: string = '';
  public description: string = '';
  public list: Task[];
  public page: Task[];
  private pageIndex: number = 1;
  private paginator: PageControl[];

  constructor(public modalService: ModalService) {}

  ngOnInit(): void {
    this.list = [];
    this.page = [];
    this.paginator = [];
  }

  addNewTask(): void {
    if (this.name != '' && this.description != '') {
      if (this.onEdit != -1) {
        this.list[this.onEdit].name = this.name;
        this.list[this.onEdit].description = this.description;
        this.onEdit = -1;
      } else {
        this.list.push({
          id: this.id,
          name: this.name,
          description: this.description,
        });
        this.id += 1;
        this.drawPaginator();
      }
      this.redefinePage();
      this.name = '';
      this.description = '';
      this.modalService.close('modal-1');
    } else {
      alert('Введите данные!');
    }
  }

  closeModal(): void {
    this.name = '';
    this.description = '';
    this.modalService.close('modal-1');
  }

  editTask(item): void {
    this.onEdit = this.list.findIndex(function (task) {
      return task.id === item.id;
    });
    this.name = item.name;
    this.description = item.description;
    this.modalService.open('modal-1');
  }

  deleteTask(item): void {
    const index = this.list.findIndex(function (task) {
      return task.id === item.id;
    });
    for (let element of this.list) {
      if (element.id === this.list[index].id) {
        this.list.splice(index, 1);
        break;
      }
    }
    this.redefinePage();
    this.drawPaginator();
  }

  redefinePage(): void {
    this.page.splice(0, this.page.length);
    this.page = Array.from(this.list);
    if (this.list.length > 5) {
      this.page.splice(0, (this.pageIndex - 1) * 5);
      this.page.splice(5, this.page.length - 5);
    }
  }

  pageUp(): void {
    if (this.pageIndex < this.list.length / 5) {
      this.pageIndex++;
      this.redefinePage();
      this.drawPaginator();
      for (let index of this.paginator) {
        index.isActive = false;
      }
      this.paginator[this.pageIndex - 1].isActive = true;
    }
  }

  pageDown(): void {
    if (this.pageIndex > 1) {
      this.pageIndex--;
      this.redefinePage();
      this.drawPaginator();
      for (let index of this.paginator) {
        index.isActive = false;
      }
      this.paginator[this.pageIndex - 1].isActive = true;
    }
  }

  drawPaginator(): void {
    if (this.paginator.length < this.list.length / 5) {
      this.paginator.push({ id: this.paginator.length + 1, isActive: false });
    } else if (this.paginator.length > Math.ceil(this.list.length / 5)) {
      this.paginator.pop();
    }
    if (this.paginator.length === 1) {
      this.paginator[0].isActive = true;
    }
  }

  goToPage(item): void {
    this.pageIndex = item.id;
    this.redefinePage();
    for (let index of this.paginator) {
      index.isActive = false;
    }
    this.paginator[item.id - 1].isActive = true;
  }
}
