import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { catchError, filter, map } from "rxjs/operators";
import { environment } from 'src/environments/environment';
import * as Msal from 'msal';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public accessToken: any;
  private authenticated = false;
  public clientApplication: Msal.UserAgentApplication = null;

  constructor(private http: HttpClient) {
    this.clientApplication = new Msal.UserAgentApplication(
      environment.uiClienId,
      'https://login.microsoftonline.com/' + environment.tenantId,
      this.authCallback,
      {
        storeAuthStateInCookie: true,
      });
  }

  public authCallback(errorDesc, token, error, tokenType) {
    if (token) {

    } else {
      console.log(error + ':' + errorDesc);
    }
  }

  public getCurrentUserInfo() {
    const user = this.clientApplication.getUser();
    alert(user.name);
  }

  public IsAuthenticated(): boolean {
    return this.clientApplication.getUser() != null;
  }

  public Logout(): any {
    localStorage.clear();
    this.clientApplication.logout();
  }

  public GetAccessToken(): Observable<any> {
    if (sessionStorage.getItem('msal.idtoken') !== undefined && sessionStorage.getItem('msal.idtoken') != null) {
      this.accessToken = sessionStorage.getItem('msal.idtoken');
    }
    return this.accessToken;
  }
}
