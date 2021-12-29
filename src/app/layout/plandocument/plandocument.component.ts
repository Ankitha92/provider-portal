import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-plandocument',
  templateUrl: './plandocument.component.html',
  styleUrls: ['./plandocument.component.scss']
})
export class PlandocumentComponent implements OnInit {

  popUp2FormGroup !: FormGroup;
  submittedthree = false;
  constructor(public formBuilder: FormBuilder) {
    this.popUp2FormGroup = this.formBuilder.group({
      plan: ['', Validators.compose([Validators.required])],
      state: ['', Validators.compose([Validators.required])],
      document: ['', Validators.compose([Validators.required])],
    });
  }
  ngOnInit(): void {
  }
  firstSubmit() {
    this.submittedthree = true;
  }
}
