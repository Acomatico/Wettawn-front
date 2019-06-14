import { Component } from "@angular/core";
import { ModalService } from '../../core/services/modal.service';

@Component({
  selector: 'p-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})


export class ModalComponent {
  constructor(public modal: ModalService) {

  }
}