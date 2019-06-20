import { Component, OnInit } from '@angular/core'
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
@Component({
    selector: 'p-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    constructor(public authService: AuthService, private router: Router) {

    }
    loggedIn: boolean = false;
    logout() {
        this.authService.logout()
        this.router.navigate(['./home'])
    }

    ngOnInit() {
        //console.log(this.authService.authInfo)
        if (this.authService.authInfo && this.authService.authInfo.token) {
            this.loggedIn = true;
        }
    }
}
