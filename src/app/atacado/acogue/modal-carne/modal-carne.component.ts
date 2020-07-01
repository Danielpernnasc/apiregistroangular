import { Component, OnInit, ViewEncapsulation, Input, ElementRef, OnDestroy } from '@angular/core';
import { ModalCarneService } from './modal-carne.service';


@Component({
  selector: 'modal-carne',
  templateUrl: './modal-carne.component.html',
  styleUrls: ['./modal-carne.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModalCarneComponent implements OnInit, OnDestroy {
  @Input() id: string;
  private element: any;

  constructor(private modalService: ModalCarneService, private el: ElementRef) {
      this.element = el.nativeElement;
   }

   ngOnInit(): void {
     if (!this.id) {
       console.error('O modal precisa de um id');
       return;
     }
     document.body.appendChild(this.element);

     this.element.addEventListener('click', el => {
       if(el.target.className === 'modal_produto') {
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
     document.body.classList.remove('container_body');
   }
   close(): void {
      this.element.style.display = 'none';
      document.body.classList.remove('container_body');
   }

}
