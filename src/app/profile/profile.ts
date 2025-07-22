import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Url } from '../../service/url';
import { Http } from '../../service/http';
import { Common } from '../../service/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile',
  imports: [CommonModule,
    FormsModule,
    RouterModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile {

  user: any;
  oldPassword: any;
  newPassword: any;
  confirmPassword: any;
  UserDetails: any = {};
  FIRSTNAME: any;
  LASTNAME: any;
  EMAIL: any;
  PHONENO: any;
  OLDPASSWORD: any;
  NEWPASSWORD: any;
  CONFIRMPASSWORD: any;

  constructor(private http: Http, private url: Url, private router: Router, public Common: Common, private ToastrService: ToastrService) { }

  ngOnInit() {
    this.UserDetails = this.Common.getUserDetails();
    this.GetUserDetailsData()
  }

  GetUserDetailsData() {
    let userdtails = JSON.parse(this.UserDetails);
    this.FIRSTNAME = userdtails.firstName;
    this.LASTNAME = userdtails.lastName;
    this.EMAIL = userdtails.email;
    this.PHONENO = userdtails.phone;
  }

  LOGOUT() {
    this.Clearform();
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }

  Clearform() {
    this.FIRSTNAME = '';
    this.LASTNAME = '';
    this.EMAIL = '';
    this.PHONENO = '';
    this.OLDPASSWORD = '';
    this.NEWPASSWORD = '';
    this.CONFIRMPASSWORD = '';
  }
}
