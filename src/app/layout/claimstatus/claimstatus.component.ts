import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiservicesService } from 'src/app/apiservices.service';


@Component({
  selector: 'app-claimstatus',
  templateUrl: './claimstatus.component.html',
  styleUrls: ['./claimstatus.component.scss']
})
export class ClaimstatusComponent implements OnInit {

  show: boolean = false;
  myform !: FormGroup;
  submittedthree = false;
  filterlist:any;
  loading:any;
  result=false;
  constructor(public formBuilder: FormBuilder,public api:ApiservicesService) {
    this.myform = this.formBuilder.group({
      claimid: ['', Validators.compose([Validators.required])]
    });
  }
  ngOnInit(): void {
   
  }
  showTable() {
    this.submittedthree = true;
    if (this.myform.valid) {
      this.show = true;
      this.submittedthree = false;
      this.loading=true;
      // console.log(this.show)
      let claimsearch = {
        "claimId":this.myform.value.claimid
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
