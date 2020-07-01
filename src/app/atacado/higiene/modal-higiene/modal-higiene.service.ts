import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class ModalHigieneService {
  private modals: any [] = [];

  add(modals: any) {
    this.modals.push(modals);
  }
  remove(id: string) {
    this.modals = this.modals.filter(x => x.id !== id);
  }

  open(id: string) {
    const modal = this.modals.find(x => x.id === id);
    modal.open();
  }

  close(id: string) {
    const modal = this.modals.find(x => x.id === id);
    modal.close();
  }
}
