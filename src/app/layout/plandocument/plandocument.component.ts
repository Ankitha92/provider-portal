import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Select2OptionData } from 'ng-select2';

@Component({
  selector: 'app-plandocument',
  templateUrl: './plandocument.component.html',
  styleUrls: ['./plandocument.component.scss']
})
export class PlandocumentComponent implements OnInit {

  popUp2FormGroup !: FormGroup;
  submittedthree = false;
  public exampleData!: Array<Select2OptionData>;
  public formControl = new FormControl();
  public value!: string;
  public exampleData2!: Array<Select2OptionData>;
  public formControl2 = new FormControl();
  public value2!: string;
  public exampleData3!: Array<Select2OptionData>;
  public formControl3 = new FormControl();
  public value3!: string;
  constructor(public formBuilder: FormBuilder) {
    this.popUp2FormGroup = this.formBuilder.group({
      plan: ['', Validators.compose([Validators.required])],
      state: ['', Validators.compose([Validators.required])],
      document: ['', Validators.compose([Validators.required])],
    });
  }
  ngOnInit(): void {
    this.exampleData = [
      {
        id: '1',
        text: 'Select Plan'
      },
      {
        id: '2',
        text: 'Clear Spring Health Value Rx (PDP)'
      },
      {
        id: '3',
        text: 'Clear Spring Health Premier Rx (PDP)'
      },
    ];
    this.exampleData2 = [
      {
        id: '4',
        text: 'Select State'
      },
      {
        id: '5',
        text: 'Alabama'
      },
      {
        id: '6',
        text: 'Alaska'
      },
      {
        id: '7',
        text: 'Arizona'
      },
      {
        id: '8',
        text: 'Arkansas'
      },
      {
        id: '9',
        text: 'California'
      },
    ];
    this.exampleData3 = [
      {
        id: '10',
        text: 'Select Document'
      },
      {
        id: '11',
        text: 'CSH Value Rx (PDP) Pharmacy Directory'
      },
      {
        id: '12',
        text: 'Annual Notice of Change - S6946-023'
      },
      {
        id: '13',
        text: 'Evidence of Coverage - S6946-023'
      },
      {
        id: '14',
        text: 'Summary of Benefits - S6946-023'
      },
      {
        id: '15',
        text: 'Covered Drug List - Value RX'
      },
    ];
  }
  firstSubmit() {
    this.submittedthree = true;
  }
}
