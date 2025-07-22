import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Common {


  isValid(inputValue: any): boolean {
    if (inputValue == '' || inputValue == undefined || inputValue == 'undefined') {
      return false;
    } else {
      return true;
    }
  }

  public getUserDetails() {
    return localStorage.getItem("UserDetails");
  }

  public setUserDetails(txt: string) {
    localStorage.setItem("UserDetails", JSON.stringify(txt));
  }


}
