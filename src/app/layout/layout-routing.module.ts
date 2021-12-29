
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            //  { path: '', component: AppComponent, pathMatch: 'full' }
            { path: '', loadChildren: () => import('./home/home.module').then((m) => m.HomeModule) },

            // { path: 'eligibilitylookup', loadChildren: () => import('./eligibilitylookup/eligibilitylookup.component').then((m) => m.EligibilitylookupComponent) },
            // { path: 'doctorsandhospitals', loadChildren: () => import('./doctorsandhospitals/doctorsandhospitals.module').then((m) => m.DoctorsandhospitalsModule) },
            // { path: 'healthandwellbeing', loadChildren: () => import('./healthandwellbeing/healthandwellbeing.module').then((m) => m.HealthandwellbeingModule) },
            // { path: 'mycoverage', loadChildren: () => import('./mycoverage/mycoverage.module').then((m) => m.MyCoverageModule) },
            // { path: 'claims', loadChildren: () => import('./claims/claims.module').then((m) => m.ClaimsModule) },
            // { path: 'forms', loadChildren: () => import('./forms/forms.module').then((m) => m.FormsModule) },
            // { path: 'acoverview', component: AcoverviewComponent },
            //  {path: 'paperless', component:PaperlessComponent},
            //  {path: 'com-pref', component: ComPrefComponent},

            { path: '**', redirectTo: 'not-found' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }


