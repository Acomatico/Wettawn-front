import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ModalService } from 'src/app/core/services/modal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  signupForm = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(25)]],
    location: ['', [Validators.required]]
  })
  constructor(private authService: AuthService, private fb: FormBuilder, private modalService: ModalService, private router: Router) { }


  signup() {
    if (!this.signupForm.valid) {
      return;
    }

    this.authService.signup(this.signupForm.value).subscribe(() => {
      this.signupForm.reset();
      this.modalService.open(
        'Thanks for signing up!',
        'You can now login with your email and password.'
      )
      // this.router.navigate(['/login']);
    })
  }
}
