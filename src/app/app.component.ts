import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  show: boolean = false;
  loading = true;
  title = 'Welcome';
  currentRoute!: string;
  constructor(public router: Router) {
    this.loginstatus();

    router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event);
    });

  }

  // Shows and hides the loading spinner during RouterEvent changes
  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.loading = true;
    }
    if (event instanceof NavigationEnd) {
      setTimeout(() => { // here
        this.loading = false;
      }, 2000);
    }

    // Set loading state to false in both of the below events to hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      setTimeout(() => { // here
        this.loading = false;
      }, 2000);
    }
    if (event instanceof NavigationError) {
      setTimeout(() => { // here
        this.loading = false;
      }, 2000);
    }




  }

  toggle() {
    this.show = !this.show;
  }




  loginstatus() {

    if ((localStorage.getItem('token') == null) || (localStorage.getItem('token') == undefined)) {
      this.router.navigate(['/login']);
    } else if (localStorage.getItem('token') != null || undefined) {
      if (this.currentRoute == '/login') {
        // this.router.navigate(['/home/home']);
      }
    }
  }
}