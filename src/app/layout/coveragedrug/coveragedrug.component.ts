import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Select2OptionData } from 'ng-select2';

import { Observable } from 'rxjs';
import {ChangeDetectorRef } from '@angular/core';
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
  public exampleData!:  Array<Select2OptionData>;
  public exampleData2!: Array<Select2OptionData>;
  public formControl = new FormControl();
  public value!: string;
  public formControl2 = new FormControl();
  public value2!: string;
  stateList: any=[];
  list: any=[];
  stateUrl: any ='';
  constructor(public formBuilder: FormBuilder, 
    public router: Router, public api: ApiservicesService,private changeDector:ChangeDetectorRef) {
    this.popUp2FormGroup = this.formBuilder.group({
      pharmacy: ['', Validators.compose([Validators.required])],
      zipcode: ['', Validators.compose([Validators.required])]
    });
  }

  ngOnInit(): void {

    this.coveredDrugGet()

    
    // this.exampleData = [
    //   {
    //     id: '1',
    //     text: 'Select Plan'
    //   },
    //   {
    //     id: '2',
    //     text: 'Clear Spring Health Value Rx (PDP)'
    //   },
     
    //   {
    //     id: '3',
    //     text: 'Clear Spring Health Premier Rx (PDP)'
    //   },
    // ];
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
  coveredDrugGet() {
    this.list=[];
     this.api.get('statecode').subscribe(res=>{
     console.log(res);
     let response=res.Response;
     console.log(response);
     
     this.list.push({id:0,text:"Select Plan"})
     for(let i=0;i<response.length;i++){
      this.list.push({id:0,text:response[i].Plan})
      
     }

      this.exampleData=this.list
      console.log(this.exampleData);
      
     // this.exampleData = res.Response;
    });

    
    }

  

ngAfterContentChecked() {
   
  this.changeDector.detectChanges();
  
   }
}
