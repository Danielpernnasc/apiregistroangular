import { Component, OnInit, ViewEncapsulation, Input, ElementRef, OnDestroy } from '@angular/core';
import { ModalLimpezaService } from './modal-limpeza.service';

@Component({
  selector: 'modal-limp',
  templateUrl: './modal-limpeza.component.html',
  styleUrls: ['./modal-limpeza.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModalLimpezaComponent implements OnInit, OnDestroy{
  @Input() id: string;
  private element: any;

  constructor(private modalService: ModalLimpezaService, private el: ElementRef) { 
      this.element = el.nativeElement;
  }

  ngOnInit(): void {

        if(!this.id) {
          console.error('Precisa de id para o modal!');
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
      document.body.classList.add('cotainer_produto');
  }
  close(): void {
    this.element.style.display = 'none';
    document.body.classList.remove('container_produto');
  }

}
