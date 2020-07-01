import { Component, ViewEncapsulation, OnInit, Input, ElementRef } from '@angular/core';
import { ModalHortifrutiService } from './modal-hortifruti.service';

@Component({
  selector: 'modal-hortifruti',
  templateUrl: './modal-hortifruti.component.html',
  styleUrls: ['./modal-hortifruti.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class ModalHortifrutiComponent implements OnInit {
  @Input() id: string;
  private element: any;
constructor(private modalService: ModalHortifrutiService, private el: ElementRef) {
            this.element = el.nativeElement;
}

ngOnInit(): void {
  if (!this.id) {
    console.error('O modal precisa de Id');
    return;
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
  document.body.classList.remove('container_body');
}
}
