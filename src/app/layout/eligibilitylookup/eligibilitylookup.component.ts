import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiservicesService } from 'src/app/apiservices.service';


@Component({
  selector: 'app-eligibilitylookup',
  templateUrl: './eligibilitylookup.component.html',
  styleUrls: ['./eligibilitylookup.component.scss']
})
export class EligibilitylookupComponent implements OnInit {

  @ViewChild('closebuttonMember') closebuttonMember: any;
  @ViewChild('closebuttonProfile') closebuttonProfile: any;
  popUp2FormGroup !: FormGroup;
  submittedthree = false;
  result: boolean = false;
  submittedone = false;
  isSearch: boolean = false;
  firstFormGroup!: FormGroup;
  parts: any = [];
  filterlist: any;
  loading: any;
  constructor(public formBuilder: FormBuilder, public api: ApiservicesService) {
    this.popUp2FormGroup = this.formBuilder.group({
      Search: ['Member Search', Validators.compose([Validators.required])],
      memberid: ['', Validators.compose([Validators.required])],
      MediCare: [''],
    });
    this.firstFormGroup = this.formBuilder.group({
      Firstname: ['', Validators.compose([Validators.required])],
      Lastname: ['', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z \-\']+')])],
      Address: ['', Validators.compose([Validators.pattern('^[a-zA-Z \-\']+')])],
      Dob: ['', Validators.required],
    });

  }

  ngOnInit(): void {
  }

  searchEnable() {
    console.log("HI");
    //this.result=true;
    this.isSearch = true;
  }

  popup2() {
    this.submittedthree = true
    console.log(this.popUp2FormGroup.valid);
    if (this.popUp2FormGroup.valid) {
      this.loading = true;
      let membersearch = { "id": this.popUp2FormGroup.value.memberid }
      this.api.post('membereligibility', membersearch).subscribe(res => {
        this.filterlist = res.Member_Eligibility;
        console.log(this.filterlist);
        this.loading = false;
        if (this.filterlist.length > 0) {
          this.result = true;
          this.filterlist = res.Member_Eligibility;
        } else {
          this.result = false;
        }
      })
    }
  }

  firstsubmit() {
    this.submittedone = true;
    // console.log(this.firstFormGroup.value);
    if (this.firstFormGroup.valid) {
      this.result = true;
      this.loading = true;
      this.submittedone = false
      // this.firstFormGroup.reset();
      let contactsearch = {
        "address": this.firstFormGroup.value.Address,
        "dob": this.firstFormGroup.value.Dob,
        "firstName": this.firstFormGroup.value.Firstname,
        "lastName": this.firstFormGroup.value.Lastname
      }
      this.api.post('contactsearch', contactsearch).subscribe(res => {
        console.log(res);
        this.filterlist = res.Contact_Search;
        console.log(this.filterlist);
        this.loading = false;
        if (this.filterlist.length > 0) {
          this.result = true;
          this.filterlist = res.Contact_Search;
        } else {
          this.result = false;
        }
      })
    }
  }

  cancel() {
    this.popUp2FormGroup.controls['memberid'].reset();
  }
  cancel2() {
    this.firstFormGroup.reset();
  }
}
