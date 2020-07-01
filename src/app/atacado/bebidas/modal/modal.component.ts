import { Component, OnInit, ViewEncapsulation, Input, ElementRef } from '@angular/core';
import { ModalService } from './modal.service'
// import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModalComponent implements OnInit {
  @Input() id: string;
  private element: any
  constructor(private modalService: ModalService, private el: ElementRef
    // public closeModalRef: BsModalRef
  ) {
    this.element = el.nativeElement;
   }

  ngOnInit(): void {
    if(!this.id) {
      console.error('Modal precisa de um ID');
      return
    }
    document.body.appendChild(this.element);
    this.element.addEventListener('click', el => {
      if (el.target.className === 'modal_produto') {
        this.close();
      }
    });
    this.modalService.add(this);
  }
  ngOnDestroy(): void {
    this.modalService.remove(this.id);
    this.element.remove();
  }
  open(): void {
    this.element.style.display = 'block';
    document.body.classList.add('container_body');
  }
  close(): void {
    this.element.style.display = 'none';
    document.body.classList.remove('container_body')
  }

}
