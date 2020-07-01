import { Component, OnInit, ViewEncapsulation, Input, ElementRef } from '@angular/core';
import { ModalMercService } from './modal-merc.service';
import { element } from 'protractor';

@Component({
  selector: 'modal-merc',
  templateUrl: './modal-merc.component.html',
  styleUrls: ['./modal-merc.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModalMercComponent implements OnInit {
  @Input() id: string;
  private element: any;
  constructor(private modalService: ModalMercService, private el: ElementRef) {
      this.element = el.nativeElement;
   }

  ngOnInit(): void {

    if(!this.id) {
      console.error('Precisa de id para o modal!');
      return;
    }
    document.body.appendChild(this.element);

    this.element.addEventListener('click', el => {
      if (el.target.className === 'modal_produtos') {
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
    document.body.classList.add('container_produto');
  }

  close(): void {
    this.element.style.display = 'none';
    document.body.classList.remove('container_produto');
  }

}
