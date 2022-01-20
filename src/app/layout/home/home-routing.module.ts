import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationstsComponent } from '../authorizationsts/authorizationsts.component';
import { ClaimsSearchComponent } from '../claims-search/claims-search.component';
import { ClaimstatusComponent } from '../claimstatus/claimstatus.component';
import { CoveragedrugComponent } from '../coveragedrug/coveragedrug.component';
import { EligibilitylookupComponent } from '../eligibilitylookup/eligibilitylookup.component';
import { HomeComponent } from '../home/home.component';
import { MedicareDPlansComponent } from '../medicare-dplans/medicare-dplans.component';
import { MedicationformularyComponent } from '../medicationformulary/medicationformulary.component';
import { PlancomparsionComponent } from '../plancomparsion/plancomparsion.component';
import { PlandetailsComponent } from '../plandetails/plandetails.component';
import { PlandocumentComponent } from '../plandocument/plandocument.component';
import { PlanoptionsComponent } from '../planoptions/planoptions.component';
import { RemittanceComponent } from '../remittance/remittance.component';
import { ViewdetailsComponent } from '../viewdetails/viewdetails.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'eligibilitylookup',
    component: EligibilitylookupComponent
  },
  {
    path: 'claims-search',
    component: ClaimsSearchComponent
  },
  {
    path: 'remittance',
    component: RemittanceComponent
  },
  {
    path: 'claimstatus',
    component: ClaimstatusComponent
  },
  {
    path: 'medicationformulatory',
    component: MedicationformularyComponent
  },
  {
    path: "Medicaredplans",
    component: MedicareDPlansComponent
  },
  {
    path: "coveragedrug",
    component: CoveragedrugComponent
  },
  {
    path: "plandocument",
    component: PlandocumentComponent
  },
  {
    path: "plancomparsion",
    component: PlancomparsionComponent
  },
  {
    path: "plandetails",
    component: PlandetailsComponent
  },
  {
    path: "planoptions",
    component: PlanoptionsComponent
  },
  {
    path: "viewdetails",
    component: ViewdetailsComponent
  },
  {
    path: "AuthorizationSts",
    component: AuthorizationstsComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }


