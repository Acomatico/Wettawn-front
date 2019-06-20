import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class LoaderService {

  isLoading: Boolean = false;

  setLoading(isLoading: Boolean) {
    setTimeout(() => {
      this.isLoading = isLoading;
    })
  }
}