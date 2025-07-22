import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Url } from '../../service/url';
import { Http } from '../../service/http';
import { Router } from '@angular/router';
import { Common } from '../../service/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  imports: [CommonModule,
    FormsModule,
    RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  EMAIL: any;
  PASSWORD: any;
  showPassword: boolean = false;

  constructor(private http: Http, private url: Url, private router: Router, private Common: Common, private ToastrService: ToastrService) { }

  ngOnInit() {
    localStorage.removeItem('UserDetails');
  }

  LOGIN() {
    // if (!this.Common.isValid(this.EMAIL)) {
    //   this.ToastrService.error('Enter a Email');
    //   return
    // }
    // if (!this.Common.isValid(this.PASSWORD)) {
    //   this.ToastrService.error('Enter a Password');
    //   return
    // }

    let payload = {
      email: this.EMAIL,
      phone: '',
      phoneCode: '965',
      password: this.PASSWORD,
      deviceToken: '',
      deviceType: '',
      deviceModel: '',
      appVersion: '',
      osVersion: '',
    };
    // console.log(' payload -> ', payload);
    // return
    this.http.login(payload).subscribe((res: any) => {
      if (res.status == 1) {
        // console.log(' res -> ', res.message);
        this.ToastrService.success(res.message);
        this.Common.setUserDetails(res.data);
        this.showPassword = false;
        this.router.navigateByUrl('/profile');
      } else if (res.status == 0) {
        this.showPassword = false;
        alert(res.message);
      }
    });
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

}
