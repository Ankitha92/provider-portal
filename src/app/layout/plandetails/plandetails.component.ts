import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-plandetails',
  templateUrl: './plandetails.component.html',
  styleUrls: ['./plandetails.component.scss']
})
export class PlandetailsComponent implements OnInit {

  copays:any;
  network_bal:any;
  visit_sum:any;
  user_det:any;
  users: any;
  constructor() { }

  ngOnInit(): void {
    $(document).ready(function () {
      //toggle the component with class accordion_body
      $(".accordion_head").click(function () {
        if ($('.accordion_body').is(':visible')) {
          $(".accordion_body").slideUp(300);
          $(".plusminus").text('+');
        }
        if ($(this).next(".accordion_body").is(':visible')) {
          $(this).next(".accordion_body").slideUp(300);
          $(this).children(".plusminus").text('+');
        } else {
          $(this).next(".accordion_body").slideDown(300);
          $(this).children(".plusminus").text('-');
        }
  
      });
  
    });
  }

}
