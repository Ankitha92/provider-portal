import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Select2OptionData } from 'ng-select2';

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
  public categoryTypes!: Array<Select2OptionData>;
  public formControl1 = new FormControl();
  public value1!: string;
  public categoryTypesTwo!: Array<Select2OptionData>;
  public formControl2 = new FormControl();
  public value2!: string;
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
    this.categoryTypes = [
      {id: '1', text: 'All TPAs'},
      {id: '2',text: '00112-Family Health Network'},
      {id: '3',text: '00197-Family Health Network Medicare'},
      {id: '4', text: '00198-Family Health Network Medicare'},
      {id: '5', text: '00277-ClearSpring'},
      ];
      this.categoryTypesTwo = [
        {id: '6', text: 'Document ID'},
        {id: '7', text: 'Certificate Number'},
        {id: '8', text: 'Claim Number'},
        {id: '9', text: 'ECHO Draft Number'},
        {id: '10', text: 'Payor Check Number'},
        {id: '11', text: 'Provider ID'},
        {id: '12', text: 'Provider ID and Echeck Date Range'},
        {id: '13', text: 'Certificate Number and EOB Date Range'},
        {id: '14', text: 'View 1099'},
        ];

      $(window).resize(function() {$('.select2').css('width', "100%"); });


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
  
   
      print() {

        window.print();
      }
}
