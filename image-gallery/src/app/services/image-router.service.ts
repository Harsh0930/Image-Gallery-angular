import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ImageRouterService {

  constructor(private routerService:Router) { }

  //Navigate to home component...
  navigateToHome(){
    this.routerService.navigate([""]);
  }
}
