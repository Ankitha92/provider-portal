import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Select2OptionData } from 'ng-select2';

@Component({
  selector: 'app-planoptions',
  templateUrl: './planoptions.component.html',
  styleUrls: ['./planoptions.component.scss']
})
export class PlanoptionsComponent implements OnInit {

  planOption = false;
  showBtn=false;
  firstFormGroup!: FormGroup;
  public exampleData1!: Array<Select2OptionData>;
  public formControl1 = new FormControl();
  public value1!: string;
  public exampleData2!: Array<Select2OptionData>;
  public formControl2 = new FormControl();
  public value2!: string;
  public exampleData3!: Array<Select2OptionData>;
  public formControl3 = new FormControl();
  public value3!: string;
 
  constructor(public formBuilder: FormBuilder) { }

  ngOnInit(): void {
    
    this.firstFormGroup = this.formBuilder.group({
      plan: ['', Validators.required],
      planYear: ['', Validators.required],
      specialAssistance: ['', Validators.required],
    });
    this.exampleData1 = [
      {
        id: '1',
        text: 'Select Year'
      },
      {
        id: '2',
        text: '2021'
      },
      {
        id: '3',
        text: '2022'
      },
    ];
    this.exampleData2 = [
      {
        id: '4',
        text: 'Select Plan'
      },
      {
        id: '5',
        text: 'Clear Spring Health Value RX (PDP) (028) HI'
      },
      {
        id: '6',
        text: 'Clear Spring Health Value RX (PDP) (029) AK'
      },
      {
        id: '7',
        text: 'Clear Spring Health Primer RX (PDP) (030) NJ'
      },
    ];
    this.exampleData3 = [
      {
        id: '8',
        text: 'Select'
      },
      {
        id: '9',
        text: 'No'
      },
      {
        id: '10',
        text: 'Yes'
      },
      {
        id: '11',
        text: 'I do not Know'
      }
    ]
  }

}
