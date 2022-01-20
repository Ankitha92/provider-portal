import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  isShown: boolean = false; // hidden by default loading icon in submit button
  alldata: any;
  myRole: string | undefined;
  form = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required])
  });
  constructor(private http: HttpClient, private router: Router) { }
  get f() {
    return this.form.controls;
  }

  // submit(){
  //   console.log(this.form.value);
  // }

  submit() {


    console.log(this.form.value);

    if (this.form.valid) {
      // alert('good');
      // this.authService.login(this.form.value)
      this.http.post('https://provider-portal.azurewebsites.net/api/login', this.form.value)
        .subscribe((response) => {
          console.log('repsonsei ', response);
          this.alldata = response
          let data = this.alldata.token;
          localStorage.setItem('token', data);
          localStorage.setItem('user_value', JSON.stringify(this.alldata.user));
          localStorage.setItem('menu',JSON.stringify(this.alldata.role_details));
          if (localStorage.getItem('token')) {
            this.router.navigate(['/home'])
          }
        })
    } else {
      // alert('not good');
      this.router.navigate(['login'])
      alert("Incorrect credentials")
    }


    // this.router.navigate(['/home'])
  }

  goToHome() {
    alert('working');
    this.router.navigate(['/home']);  // define your component where you want to go
  }



  // login submit button animation
  toggleShow() {
    this.isShown = !this.isShown;
  }



  loginCheck() {

    if (this.form.valid) {
      const userCategory = this.form.value.userCategory;
      const username = this.form.value.username;
      const password = this.form.value.password;

      console.log(userCategory, username, password);

      //  this._storage.set('IS_LOGGED_IN', true);
      //  this._authService.isLoggedIn = true;

      this.router.navigate(['home']);
    }
  }


  register() {
    console.log("wwe");
    this.router.navigate(['register'])
  }




}

function is_object(arg0: any) {
  throw new Error('Function not implemented.');
}