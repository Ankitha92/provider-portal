import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-viewdetails',
  templateUrl: './viewdetails.component.html',
  styleUrls: ['./viewdetails.component.scss']
})
export class ViewdetailsComponent implements OnInit {
  @ViewChild('closebuttonMember') closebuttonDependent: any;
 isResult:boolean=false;
 filterName:any=''
 isNext:boolean=false;
 firstFormGroup!:FormGroup;
  submittedone:boolean=false;
  constructor(public formBuilder: FormBuilder) { 
    this.firstFormGroup=this.formBuilder.group({
      zipcode:['', Validators.compose([Validators.required])]
    });
  }

  ngOnInit(): void {
  }

  Search(){
this.isResult=true;
  }

  clear(){
    this.filterName='';
    this.isResult=false;
    this.isNext=false;
  }

  next(){
    this.isNext =true;
   
  }
  close(){
    this.closebuttonDependent.nativeElement.click();
  }

  firstSubmit(){
    
  }

}
