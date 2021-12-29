import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-remittance',
  templateUrl: './remittance.component.html',
  styleUrls: ['./remittance.component.scss']
})
export class RemittanceComponent implements OnInit {
  popUp2FormGroup !: FormGroup;
  submittedthree = false;
  result: boolean = false;
  isSearch: boolean = false;
  firstFormGroup!: FormGroup;
  parts: any = [];
  dropDown: any = null;
  dropDown2: any = null;
  constructor(public formBuilder: FormBuilder) {
    
  }

  ngOnInit(): void {
    this.popUp2FormGroup = this.formBuilder.group({
      TPA: ['', Validators.compose([Validators.required])],
      Searchtype: ['', Validators.compose([Validators.required])],
      S_criteria: ['', Validators.compose([Validators.required])],
    });
  }

  searchEnable() {
    console.log("HI");

    //this.result=true;
    this.isSearch = true;
  }
  popup2() {

    this.submittedthree = true
    console.log(this.submittedthree);

    console.log(this.popUp2FormGroup.valid);

    if (this.popUp2FormGroup.valid) {
      this.result = true;
      this.submittedthree = false;
      this.parts.push(this.popUp2FormGroup.value)
      console.log(this.parts);
      this.popUp2FormGroup.reset();
    }
  }

  firstsubmit() {
    this.result = false;
    this.submittedthree = true;
    if (this.firstFormGroup.valid) {
      this.result = true;
     // this.submittedone = false
      this.firstFormGroup.reset();
    }
  }
  cancel(){
    this.popUp2FormGroup.reset();
    this.submittedthree=false;
    this.dropDown = document.getElementById("sel1");
    this.dropDown.selectedIndex = null;
    this.dropDown2 = document.getElementById("sel2");
    this.dropDown2.selectedIndex = null;
  }
}
