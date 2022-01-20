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
  menuDetails:any;
  menu = [
    {
      "menuName": "My Practice",
      "subMenu": [
        {
          "functionName": "View Practice Management",
          "link": "/not-found"
        },
        {
          "functionName": "Update Practice Information",
          "link": ""
        },
        {
          "functionName": "Manage Sub-Group Account User Manage",
          "link": ""
        },
        {
          "functionName": "Contract Users",
          "link": ""
        },
        {
          "functionName": "Manage Medical Groups",
          "link": ""
        },
        {
          "functionName": "Manage Providers",
          "link": ""
        },
        {
          "functionName": "Reports",
          "link": ""
        }
      ]
    },
    {
      "menuName": "My Patients",
      "subMenu": [
        {
          "functionName": "View Member Eligibility and Benefits",
          "link": "/eligibilitylookup"
        },
        {
          "functionName": "View Care Plans",
          "link": "/medicationformulatory"
        },
        {
          "functionName": "View Care Gaps",
          "link": ""
        },
        {
          "functionName": "Submit Care Gaps",
          "link": ""
        },
        {
          "functionName": "Request Member Transfer",
          "link": ""
        },
        {
          "functionName": "View and Submit Visit Checklist",
          "link": ""
        }
      ]
    },
    {
      "menuName": "Authorizations & Referrals",
      "subMenu": [
        {
          "functionName": "View Authorization Status",
          "link": "/AuthorizationSts"
        },
        {
          "functionName": "Submit Authorizations",
          "link": ""
        },
        {
          "functionName": "View and Submit Referrals",
          "link": ""
        }
      ]
    },
    {
      "menuName": "Claims",
      "subMenu": [
        {
          "functionName": "View Claim Status",
          "link": "/claims-search"
        },
        {
          "functionName": "Submit Claims and Corrected Claims",
          "link": ""
        },
        {
          "functionName": "Submit Appeals and Disputes",
          "link": ""
        },
        {
          "functionName": "Remittance Advice",
          "link": "/remittance"
        }
      ]
    },
    {
      "menuName": "Other Features",
      "subMenu": [
        {
          "functionName": "Request Affiliation to a Contract or Sub-Group Account",
          "link": ""
        },
        {
          "functionName": "Search and Take Portal Trainings",
          "link": ""
        },
        {
          "functionName": "Secure Messaging and Notifications",
          "link": ""
        },
        {
          "functionName": "Provider Lookup",
          "link": ""
        },
        {
          "functionName": "View Help",
          "link": ""
        }
      ]
    }
  ]
  constructor(private router: Router) {
    console.log('Header constructor called');
    this.userdetails = localStorage.getItem('user_value');
    this.users = JSON.parse(this.userdetails);
    localStorage.getItem('menu')
    let menu:any = localStorage.getItem('menu')
    this.menuDetails = JSON.parse(menu)
    
    console.log(this.menuDetails);
    
    console.log(JSON.parse(this.userdetails));

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

