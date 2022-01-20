import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ApiservicesService } from 'src/app/apiservices.service';



@Component({
  selector: 'app-claims-search',
  templateUrl: './claims-search.component.html',
  styleUrls: ['./claims-search.component.scss']
})

export class ClaimsSearchComponent implements OnInit {
  submittedone: boolean = false;
  firstFormGroup!: FormGroup;
  show: boolean = false;
  myform !: FormGroup;
  submittedthree = false;
  filterlist: any;
  loading: any;
  result = false;

  constructor(public formBuilder: FormBuilder, public api: ApiservicesService) {
    this.firstFormGroup = this.formBuilder.group({
      claimid: ['',],
      subscribid: ['',],
      firstname: ['', Validators.compose([Validators.pattern('^[a-zA-Z \-\']+')])],
      lastname: ['', Validators.compose([Validators.pattern('^[a-zA-Z \-\']+')])],
      ServiceDate: [''],
      ServiceDateTo: [''],
      Npi: ['',],
      Dob: ['']
    });
    this.myform = this.formBuilder.group({
      claimid: ['', Validators.compose([Validators.required])]
    });
  }

  ngOnInit(): void { }

  Claimsearch() {
    this.submittedone = true;
    console.log(this.firstFormGroup.value);
    if (
      ((this.firstFormGroup.value.claimid == '') && (this.firstFormGroup.value.subscribid == '')) &&
      ((this.firstFormGroup.value.firstname == '') && (this.firstFormGroup.value.lastname == '')) &&
      ((this.firstFormGroup.value.ServiceDate == '') && (this.firstFormGroup.value.ServiceDateTo == '')) &&
      ((this.firstFormGroup.value.Npi == '') && (this.firstFormGroup.value.Dob == ''))
    ) {
      this.show = false;
      alert('Please enter any field to search');
    }
    else if (
      ((this.firstFormGroup.value.claimid == null) && (this.firstFormGroup.value.subscribid == null)) &&
      ((this.firstFormGroup.value.firstname == null) && (this.firstFormGroup.value.lastname == null)) &&
      ((this.firstFormGroup.value.ServiceDate == null) && (this.firstFormGroup.value.ServiceDateTo == null)) &&
      ((this.firstFormGroup.value.Npi == null) && (this.firstFormGroup.value.Dob == null))
    ) {
      alert('Please enter any field to search');
      this.show = false;
    } else {
      this.submittedone = false;
      if (this.firstFormGroup.valid) {
        this.show = true;
        let data = {
          "Claimid": this.firstFormGroup.value.claimid,
          "FirstName": this.firstFormGroup.value.firstname,
          "LastName": this.firstFormGroup.value.lastname,
          "DateOfBirth": this.firstFormGroup.value.Dob,
          "NPI": this.firstFormGroup.value.Npi,
          "SubscribeId": this.firstFormGroup.value.subscribid,
          "ServiceDateBegins": this.firstFormGroup.value.ServiceDate,
          "ServiceDateEnds": this.firstFormGroup.value.ServiceDateTo
        }
        this.api.post('claimssearch', data).subscribe(res => {
          console.log(res);
          this.filterlist = res.Claim_Status;
          console.log(this.filterlist);
          this.loading = false;
          if (this.filterlist.length > 0) {
            this.show = true;
            this.filterlist = res.Claim_Status;
          } else {
            this.show = false;
          }
        })

        this.firstFormGroup.reset();
      }

    }
  }

  cancel2() {
  
    this.firstFormGroup.reset();
    this.show = false;
  }




  Claimstatus() {
    this.submittedthree = true;
    if (this.myform.valid) {
      this.show = true;
      this.submittedthree = false;
      this.loading = true;
      // console.log(this.show)
      let claimsearch = {
        "claimId": this.myform.value.claimid
      }
      this.api.post('claims', claimsearch).subscribe(res => {
        console.log(res);
        this.filterlist = res.Claim_Status;
        console.log(this.filterlist);
        this.loading = false;
        if (this.filterlist.length > 0) {
          this.show = true;
          this.filterlist = res.Claim_Status;
        } else {
          this.show = false;
        }
      })
    }
  }
}
