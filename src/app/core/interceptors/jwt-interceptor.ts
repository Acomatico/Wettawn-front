import { HttpRequest, HttpInterceptor, HttpHandler, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { Observable } from "rxjs";

@Injectable()

export class JWTInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) { }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.authService && this.authService.authInfo) {
      const { token } = this.authService.authInfo;
      request = request.clone({
        setHeaders: {
          Authorization: `JWT ${token}`
        }
      })
    }
    return next.handle(request);
  }
}