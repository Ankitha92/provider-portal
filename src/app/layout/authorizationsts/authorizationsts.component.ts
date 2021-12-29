import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiservicesService } from 'src/app/apiservices.service';

@Component({
  selector: 'app-authorizationsts',
  templateUrl: './authorizationsts.component.html',
  styleUrls: ['./authorizationsts.component.scss']
})
export class AuthorizationstsComponent implements OnInit {
  show: boolean = false;
  popUp2FormGroup !: FormGroup;
  submittedthree = false;
  filterlist: any;
  loading: any;
  result = false;
  data:boolean=false;
  constructor(public formBuilder: FormBuilder, public api: ApiservicesService) {
    this.popUp2FormGroup = this.formBuilder.group({
      memberid: ['', Validators.compose([Validators.required])],
    });
  }
  ngOnInit(): void {
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
  author(){
    this.data=true;
  }
}
