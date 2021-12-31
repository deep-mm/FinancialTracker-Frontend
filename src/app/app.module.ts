import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvestmentComponent } from './investment/investment.component';
import { InvestmentDetailsComponent } from './investment-details/investment-details.component';
import { AddInvestmentComponent } from './add-investment/add-investment.component';
import { MatMomentDateModule, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { HTTP_INTERCEPTORS, HttpClientModule, HttpClient } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { MsalModule, MsalInterceptor } from '@azure/msal-angular';
import { AuthService } from './services/auth.service';
import { environment } from 'src/environments/environment';

export const protectedResourceMap: any =
  [
    [environment.apiBaseUrl, environment.scopeUri
    ]
  ];

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
    MatMomentDateModule,
    MsalModule.forRoot({
      clientID: environment.uiClienId,
      authority: 'https://login.microsoftonline.com/' + environment.tenantId,
      cacheLocation: 'localStorage',
      protectedResourceMap: protectedResourceMap,
      redirectUri: environment.redirectUrl
    }),
  ],
  providers: [
    HttpClient,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS, useClass: MsalInterceptor, multi: true
    },
    { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
