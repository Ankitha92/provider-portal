import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';

import { RouterModule } from '@angular/router';
import { HomeModule } from './home/home.module';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import {  EligibilitylookupComponent } from './eligibilitylookup/eligibilitylookup.component';
import { ClaimsSearchComponent } from './claims-search/claims-search.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RemittanceComponent } from './remittance/remittance.component';
import { ClaimstatusComponent } from './claimstatus/claimstatus.component';
import { MedicationformularyComponent } from './medicationformulary/medicationformulary.component';
import { CoveragedrugComponent } from './coveragedrug/coveragedrug.component';
import { MedicareDPlansComponent } from './medicare-dplans/medicare-dplans.component';
import { PlandocumentComponent } from './plandocument/plandocument.component';
import { PlancomparsionComponent } from './plancomparsion/plancomparsion.component';
import { PlanoptionsComponent } from './planoptions/planoptions.component';
import { ViewdetailsComponent } from './viewdetails/viewdetails.component';
import { AuthorizationstsComponent } from './authorizationsts/authorizationsts.component';


@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        LayoutComponent,EligibilitylookupComponent, ClaimsSearchComponent, RemittanceComponent, ClaimstatusComponent, MedicationformularyComponent, CoveragedrugComponent, MedicareDPlansComponent, PlandocumentComponent, PlancomparsionComponent, PlanoptionsComponent, ViewdetailsComponent, AuthorizationstsComponent
        
    ],
    imports: [
        CommonModule,
        LayoutRoutingModule,HomeModule,
        RouterModule, ReactiveFormsModule, FormsModule,

    ],
    exports: [

    ]

})
export class LayoutModule { }
