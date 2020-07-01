import { Component, OnInit, ViewEncapsulation, Input, ElementRef, OnDestroy } from '@angular/core';;
import { ModalFriosService } from './modal-frios.service';

@Component({
  selector: 'modal-frios',
  templateUrl: './modal-frios.component.html',
  styleUrls: ['./modal-frios.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModalFriosComponent implements OnInit, OnDestroy{
    @Input() id: string;
    private element: any;

  constructor(private modalService: ModalFriosService, private el: ElementRef) { 
      this.element = el.nativeElement;
  }

  ngOnInit(): void {

    if(!this.id) {
      console.error('The modal must have an id');
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
    document.body.classList.remove('container_produto');
  }
  close(): void {
    this.element.style.display = 'none';
    document.body.classList.remove('container-produtos');
  }


}
