import { Component, OnInit, ViewEncapsulation, OnDestroy, Input, ElementRef } from '@angular/core';
import { ModalService } from './modal.service';

@Component({
  selector: 'modal-kit',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input() id: string;
  private element: any;

  constructor(private modalSevice: ModalService, private el: ElementRef) {
      this.element = el.nativeElement
   }

  ngOnInit(): void {
    if (!this.id) {
      console.error('O modal precisa de id');
      return;
    }

    document.body.appendChild(this.element);

    this.element.addEventListener('click', el => {
      if(el.target.className === 'modal-kit') {
        this.close();
      }
    });
    this.modalSevice.add(this);
  }
  ngOnDestroy() {
    this.modalSevice.remove(this.id);
    this.element.remove();
  }
  open(): void {
    this.element.style.display = 'block';
    document.body.classList.add('modal_campo')
  }
  close(): void {
    this.element.style.display = 'none';
    document.body.classList.remove('modal_campo')
  }

}
