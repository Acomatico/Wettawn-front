import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpResponse } from '@angular/common/http';
import { LoaderService } from '../services/loader.service';
import { tap, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Injectable()

export class LoaderInterceptor implements HttpInterceptor {
  private totalRequest = 0;
  constructor(private loaderService: LoaderService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    this.totalRequest++;
    this.loaderService.setLoading(true);
    return next.handle(request).pipe(
      tap(res => {
        if (res instanceof HttpResponse) {
          this.decreaseRequest()
        }
      }),
      catchError(error => {
        this.decreaseRequest();
        return throwError(error);
      })
    )
  }
  private decreaseRequest() {
    this.totalRequest--;
    if (this.totalRequest === 0) {
      this.loaderService.setLoading(false);
    }
  }
}