import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coveragedrug',
  templateUrl: './coveragedrug.component.html',
  styleUrls: ['./coveragedrug.component.scss']
})
export class CoveragedrugComponent implements OnInit {
  popUp2FormGroup!: FormGroup;
  submittedthree: boolean = false;
  constructor(public formBuilder: FormBuilder, public router: Router) {
    this.popUp2FormGroup = this.formBuilder.group({
      pharmacy: ['', Validators.compose([Validators.required])],
      zipcode: ['', Validators.compose([Validators.required])]
    });
  }

  ngOnInit(): void {
  }
  firstsubmit() {
    this.submittedthree = true;
    if (this.popUp2FormGroup.valid) {
      this.router.navigate(['/planoptions'])
    }
  }


}
