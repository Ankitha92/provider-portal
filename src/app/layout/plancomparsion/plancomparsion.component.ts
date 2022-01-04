import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiservicesService } from 'src/app/apiservices.service';

@Component({
  selector: 'app-plancomparsion',
  templateUrl: './plancomparsion.component.html',
  styleUrls: ['./plancomparsion.component.scss']
})
export class PlancomparsionComponent implements OnInit {
  show: boolean = false;
  plan: any ;
  datavalue:any;
  planname: any;
  zipcode: any;
  constructor(public activateroute: ActivatedRoute, public api: ApiservicesService) {
    this.activateroute.params.subscribe(res => {
      console.log(res);
      this.planname = res.planname;
      this.zipcode = res.zipcode;
      this.plandetails();
    })
   }

  ngOnInit(): void {
    //zipid: new FormControl('')
  }
  
  plandetails() {
    let plandetails = { "plan": this.planname, "zipcode": this.zipcode }
    this.api.post('plandetails', plandetails).subscribe(res => {
      this.datavalue=res;
      console.log(this.datavalue);
      this.plan = this.datavalue.list;
      console.log(this.plan);
    })
  }

}
