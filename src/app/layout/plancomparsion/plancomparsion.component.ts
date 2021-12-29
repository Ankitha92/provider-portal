import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-plancomparsion',
  templateUrl: './plancomparsion.component.html',
  styleUrls: ['./plancomparsion.component.scss']
})
export class PlancomparsionComponent implements OnInit {
  show: boolean = false;
  currentVal: any;
  data: number = 4;
  plan: any = [
    { "heading": "Clear Spring Health Value Rx (PDP) - Georgia", "premium": "$26.50", "deductable": "$480.00" },
    { "heading": "Clear Spring Health Premier Rx (PDP) - Georgia", "premium": "$18.20", "deductable": "$480.00" },

  ]
  constructor() { }

  ngOnInit(): void {
    zipid: new FormControl('')
  }
  showCard(val: any) {
    this.show = true
    console.log(val);
    this.currentVal = val;
  }

}
