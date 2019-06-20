import { Component } from "@angular/core";
import { Routes } from "@angular/router";
import { AccountService } from 'src/app/core/services/account.service';
import { FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'p-edit-acc',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.scss']
})
export class EditAccountComponent {
  editForm = this.fb.group({
    email: ['', []],
    city: ['', []]
  })
  constructor(private accountService: AccountService, private fb: FormBuilder) {

  }

  editAccount() {
    this.accountService.editAccount(this.editForm.value).subscribe()
  }
}