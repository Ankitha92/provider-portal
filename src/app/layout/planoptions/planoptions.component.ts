import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-planoptions',
  templateUrl: './planoptions.component.html',
  styleUrls: ['./planoptions.component.scss']
})
export class PlanoptionsComponent implements OnInit {

  planOption = false;
  showBtn=false;
  firstFormGroup!: FormGroup;
 
  constructor(public formBuilder: FormBuilder) { }

  ngOnInit(): void {
    
    this.firstFormGroup = this.formBuilder.group({
      plan: ['', Validators.required],
      planYear: ['', Validators.required],
      specialAssistance: ['', Validators.required],
    });
  }

}
