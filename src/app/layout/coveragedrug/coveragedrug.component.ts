import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Select2OptionData } from 'ng-select2';
import { ApiservicesService } from 'src/app/apiservices.service';

@Component({
  selector: 'app-coveragedrug',
  templateUrl: './coveragedrug.component.html',
  styleUrls: ['./coveragedrug.component.scss']
})
export class CoveragedrugComponent implements OnInit {
  popUp2FormGroup!: FormGroup;
  submittedthree: boolean = false;
  width:number=300;
  public exampleData!: Array<Select2OptionData>;
  public exampleData2!: Array<Select2OptionData>;
  public formControl = new FormControl();
  public value!: string;
  public formControl2 = new FormControl();
  public value2!: string;
  constructor(public formBuilder: FormBuilder, public router: Router, public api: ApiservicesService) {
    this.popUp2FormGroup = this.formBuilder.group({
      pharmacy: ['', Validators.compose([Validators.required])],
      zipcode: ['', Validators.compose([Validators.required])]
    });
  }

  ngOnInit(): void {
    //  this.api.getPrice().subscribe(res=>{
    //    console.log(
    //      res
    //    );
      
    //  })
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
    // In your Javascript (external .js resource or <script> tag)
  }
  firstsubmit() {
    this.submittedthree = true;
    if (this.popUp2FormGroup.valid) {
      this.router.navigate(['/planoptions'])
    }
  }


}
