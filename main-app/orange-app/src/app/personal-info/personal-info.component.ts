import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DetailsModalComponent } from '../details-modal/details-modal.component';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css'],
})
export class PersonalInfoComponent implements OnInit {
  list = [
    { title: 'Nodejs', show: false },
    { title: 'Nodejs', show: false },
    { title: 'Nodejs', show: false },
    { title: 'Nodejs', show: false },
    { title: 'Nodejs', show: false },

     ];

  public counter: number = 0;

  increment() {
    this.counter += 1;
  }

  decrement() {
    this.counter -= 1;
  }

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  showDetailsModal(item) {
    console.log(item);

    const modalRef = this.modalService.open(DetailsModalComponent, {
      centered: true,
    });

    modalRef.componentInstance.name = 'World';
    modalRef.componentInstance.data = item;
  }
}
