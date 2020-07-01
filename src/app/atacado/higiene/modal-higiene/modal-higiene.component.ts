import { Component, OnInit, ViewEncapsulation, Input, ElementRef } from '@angular/core';
import { ModalHigieneService } from './modal-higiene.service';

@Component({
  selector: 'modal-higiene',
  templateUrl: './modal-higiene.component.html',
  styleUrls: ['./modal-higiene.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModalHigieneComponent implements OnInit {
  @Input() id: string;
  private element: any;

  constructor(private modalService: ModalHigieneService, private el: ElementRef) {
            this.element = el.nativeElement;
   }

   ngOnInit(): void {
     if (!this.id) {
       console.error('O modal precisa ter um Id porra!');
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
