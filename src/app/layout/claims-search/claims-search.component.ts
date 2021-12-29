import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-claims-search',
  templateUrl: './claims-search.component.html',
  styleUrls: ['./claims-search.component.scss']
})
export class ClaimsSearchComponent implements OnInit {
  submittedone:boolean=false;
  firstFormGroup!: FormGroup;
  constructor(public formBuilder: FormBuilder) { 
    this.firstFormGroup = this.formBuilder.group({
      claimid:['', Validators.compose([Validators.required])],
      subscribid:['', Validators.compose([Validators.required])],
      firstname:['', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z \-\']+')])],
      lastname:['', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z \-\']+')   ])],
      ServiceDate:['', Validators.compose([Validators.required])],
      ServiceDateTo:['', Validators.compose([Validators.required])],
      Npi:['', Validators.compose([Validators.required])],
    });

  }

  ngOnInit(): void {
   
  }
  firstsubmit(){
    this.submittedone=true;
    if (this.firstFormGroup.valid){
      this.submittedone=false;
      this.firstFormGroup.reset();
    }
  }
  cancel2(){
    this.firstFormGroup.reset();
  }
  // firstsubmit() {
  //   this.submittedone = true;
  //    console.log(this.member)
  // //  if(this.firstformGroup.valid){
  // //   this.member = {
  // //     claimidMv: this.firstformGroup.value.ClaimId,
  // //     subscriberidMv:this.firstformGroup.value.SubscriberId,
  // //     firstNameMv: this.firstformGroup.value.Firstname,
  // //     lastNameMv: this.firstformGroup.value.Lastname,
  // //     ServiceDateMv: this.firstformGroup.value.ServiceDate,
  // //     ServiceDateToMv: this.firstformGroup.value.ServiceDateTo,
  // //     npiMv: this.firstformGroup.value.Npi,
  // //   }
  // // }
  //   this.firstformGroup.reset();
  //   // this.firstformGroup =this.formBuilder.group({
  //   //   ClaimId: [' '],
  //   //   SubscriberId: [' '],
  //   //   Firstname: [' '],
  //   //   Lastname: [' '],
  //   //   ServiceDate: [' '],
  //   //   ServiceDateTo: [' '],
  //   //   Npi : [' ']
  //   // })
  // }
 
}
