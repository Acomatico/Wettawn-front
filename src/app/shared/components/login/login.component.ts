import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'p-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(25)]],
  })

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  login() {
    this.authService.login(this.loginForm.value).subscribe(
      () => {
        this.router.navigate(['/account'])
      }
    );

  }
}
