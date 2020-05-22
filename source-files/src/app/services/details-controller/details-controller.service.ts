import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailsControllerService {
  
  private show: boolean = false;

  constructor() { }

  showDetails(): void {
    this.show = true;
  }

  hideDetails(): void {
    this.show = false;
  }

  checkDetails(): boolean {
    return this.show;
  }

}
