import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddInvestmentComponent } from './add-investment/add-investment.component';
import { InvestmentDetailsComponent } from './investment-details/investment-details.component';
import { InvestmentComponent } from './investment/investment.component';
import { MsalGuard } from '@azure/msal-angular';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: InvestmentComponent ,canActivate: [MsalGuard]},
  { path: 'investment/:investmentId', component: InvestmentDetailsComponent ,canActivate: [MsalGuard]},
  { path: 'investment/new', component: AddInvestmentComponent ,canActivate: [MsalGuard]},
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
