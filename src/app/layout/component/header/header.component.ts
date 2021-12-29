import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userdetails: any;
  users: any;
  providerlogin: any;
  show: boolean = false;

  constructor(private router: Router) {
    console.log('Header constructor called');
    this.userdetails = localStorage.getItem('user_value');
    this.users = JSON.parse(this.userdetails);
    console.log(JSON.parse(this.userdetails));
    // this.providerlogin = localStorage.getItem('providerLogin');

  }

  ngOnInit(): void {
    //  this.username = this.authservice.getUserName();

  }


  logout() {
    // this.token = null;
    // this.user = null;
    localStorage.clear();
    localStorage.removeItem('user_value');
    window.location.reload();
    alert('You have logged out successfully..')
    this.router.navigate(['/login']);
    // this.show = !this.show;
  }
  claimSearch(){
    this.router.navigateByUrl('claims-search')
  }





}

