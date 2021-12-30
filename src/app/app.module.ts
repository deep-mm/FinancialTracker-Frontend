import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvestmentComponent } from './investment/investment.component';
import { InvestmentDetailsComponent } from './investment-details/investment-details.component';
import { AddInvestmentComponent } from './add-investment/add-investment.component';
import { XhrInterceptor } from './utils/xhrInterceptor';
import { MatMomentDateModule, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InvestmentComponent,
    InvestmentDetailsComponent,
    AddInvestmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule,
    MatMomentDateModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true },
    { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
