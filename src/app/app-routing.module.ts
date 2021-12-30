import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddInvestmentComponent } from './add-investment/add-investment.component';
import { InvestmentDetailsComponent } from './investment-details/investment-details.component';
import { InvestmentComponent } from './investment/investment.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: InvestmentComponent ,canActivate: [AuthGuardService]},
  { path: 'investment/:investmentId', component: InvestmentDetailsComponent ,canActivate: [AuthGuardService]},
  { path: 'investment/new', component: AddInvestmentComponent ,canActivate: [AuthGuardService]},
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
