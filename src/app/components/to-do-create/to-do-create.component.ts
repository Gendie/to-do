import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-to-do-create',
  templateUrl: './to-do-create.component.html',
  styleUrls: ['./to-do-create.component.scss']
})
export class ToDoCreateComponent {

  public title: string;

  constructor(private activeModal: NgbActiveModal) { }

  add() {
    this.activeModal.close(this.title);
  }

  dismiss() {
    this.activeModal.dismiss();
  }

}
