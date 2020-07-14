import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ToDoCreateComponent } from '../to-do-create/to-do-create.component';
import { ToDoService } from '../../services';
import { ToDoItem } from '../../models';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {

  @ViewChild('cardBody') private cardBody: ElementRef<HTMLDivElement>;
  public toDoList: ToDoItem[] = [];

  constructor(
    private modalService: NgbModal,
    private toDoService: ToDoService
  ) { }

  ngOnInit(): void {
    this.getToDoList();
  }

  private getToDoList() {
    this.toDoService.getToDoList().subscribe(
      res => {
        this.toDoList = res;
      },
      err => {
        // Notify error
      }
    )
  }

  public toggleToDoItem(toDoItem: ToDoItem) {
    toDoItem.isDone = !toDoItem.isDone;
  }

  public openCreateModal() {
    const modalRef = this.modalService.open(ToDoCreateComponent);
    modalRef.result.then((newToDo: string) => {
      this.toDoList.push({
        title: newToDo,
        isDone: false
      })
      setTimeout(()=>{
        this.cardBody.nativeElement.scrollTo(0, this.cardBody.nativeElement.scrollHeight);
      }, 0)
    }
    ).catch(() => {
      // Dismissed
    });
  }

}
