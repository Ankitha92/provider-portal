import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiservicesService } from 'src/app/apiservices.service';

@Component({
  selector: 'app-medicare-dplans',
  templateUrl: './medicare-dplans.component.html',
  styleUrls: ['./medicare-dplans.component.scss']
})
export class MedicareDPlansComponent implements OnInit {
  form = new FormGroup({
    zipcode: new FormControl('', [Validators.required])
  });
  planname: any;
  filterlist: any;
  submittedthree: boolean = false;
  popUp2FormGroup!: FormGroup;
  constructor(public activateroute: ActivatedRoute, public api: ApiservicesService, public formBuilder: FormBuilder,public router:Router) {
    this.popUp2FormGroup = this.formBuilder.group({
      zipcode: ['', Validators.compose([Validators.required])]
    });
    this.activateroute.params.subscribe(res => {
      console.log(res);
      this.planname = res.planname;
      this.plandetails();

    })
  }
  ngOnInit(): void {
  }

  get f() {
    return this.form.controls;
  }

  firstsubmit() {
    this.submittedthree = true;
    if(this.popUp2FormGroup.valid){
      //this.router.navigate(['/plancomparsion'])
      this.router.navigate(['/plancomparsion', { "planname": this.planname, "zipcode": this.popUp2FormGroup.value.zipcode }]);
    }
  }


  plandetails() {
    let plandetails = { "plan": this.planname, "year": localStorage.getItem('planyear') }
    this.api.post('medicareplan', plandetails).subscribe(res => {
      this.filterlist = res.Medicare_Plans[0];
      console.log(this.filterlist);

    })
  }

}
