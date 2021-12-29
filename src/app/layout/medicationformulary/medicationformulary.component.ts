import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medicationformulary',
  templateUrl: './medicationformulary.component.html',
  styleUrls: ['./medicationformulary.component.scss']
})
export class MedicationformularyComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  Plan(planname: any) {
    this.router.navigate(['/Medicaredplans', { "planname": planname }]);
  }

  year(planyear: any) {
    localStorage.setItem("planyear", planyear);
  }

}
