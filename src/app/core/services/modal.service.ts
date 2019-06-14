import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class ModalService {
  opened = false;
  title = '';
  content = '';

  open(title: string, content: string) {
    this.title = title;
    this.content = content;
    this.opened = true;
  }

  close() {
    this.opened = false;
  }
}