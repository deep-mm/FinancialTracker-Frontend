import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ActiveInvestment } from '../models/ActiveInvestment';
import { Investment } from '../models/Investment';
import { InvestmentStatus } from '../models/InvestmentStatus';
import { InvestmentType } from '../models/InvestmentType';
import { Member } from '../models/Member';
import { PagedInvestmentResponse } from '../models/PagedInvestmentResponse';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = environment.apiBaseUrl + "/investment";
  investmentTypes: InvestmentType[] = [];
  investmentStatuses: InvestmentStatus[] = [];
  members: Member[] = [];

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this._authService.GetAccessToken()
    })
  };

  constructor(private http: HttpClient, private sanitizer: DomSanitizer, private _authService: AuthService) { }

  public getInvestmentTypes(): Observable<InvestmentType[]> {
    return this.http.get(`${this.baseUrl}/investmentTypes`).pipe(
      map((json: string) => {
        const types: InvestmentType[] = [];
        for (const type of json) {
          types.push(new InvestmentType(type));
        }
        this.investmentTypes = types;
        return types;
      })
    );
  }

  public getInvestmentStatuses(): Observable<InvestmentStatus[]> {
    return this.http.get(`${this.baseUrl}/investmentStatuses`).pipe(
      map((json: string) => {
        const statuses: InvestmentStatus[] = [];
        for (const status of json) {
          statuses.push(new InvestmentStatus(status));
        }
        this.investmentStatuses = statuses;
        return statuses;
      })
    );
  }

  public getMembers(): Observable<Member[]> {
    return this.http.get(`${this.baseUrl}/members`).pipe(
      map((json: string) => {
        const members: Member[] = [];
        for (const member of json) {
          members.push(new Member(member));
        }
        this.members = members;
        return members;
      })
    );
  }

  public getActiveInvestments(): Observable<ActiveInvestment[]> {
    return this.http.get(`${this.baseUrl}/activeInvestments`).pipe(
      map((json: string) => {
        const investments: ActiveInvestment[] = [];
        for (const investment of json) {
          investments.push(new ActiveInvestment(investment));
        }
        return investments;
      })
    );
  }

  public getAllInvestments(): Observable<Investment[]> {
    return this.http.get(`${this.baseUrl}`).pipe(
      map((json: string) => {
        const investments: Investment[] = [];
        for (const investment of json) {
          investments.push(new Investment(investment));
        }
        return investments;
      })
    );
  }

  public getInvestmentById(investmentId: number): Observable<Investment> {
    return this.http.get(`${this.baseUrl}/${investmentId}`).pipe(
      map((json: string) => {
        return new Investment(json);
      })
    );
  }

  public getPagedInvestments(pageNumber: number, pageSize: number, searchText: string, filter: string): Observable<PagedInvestmentResponse> {
    return this.http.get(`${this.baseUrl}/pagedInvestments?pageNumber=${pageNumber}&pageSize=${pageSize}&searchText=${searchText}&filter=${filter}`).pipe(
      map((json: string) => {
        return new PagedInvestmentResponse(json);
      })
    );
  }

  public addInvestment(investment: Investment): Observable<Investment> {
    return this.http.post<any>(`${this.baseUrl}`, investment).pipe(map((json: string) => {
      return new Investment(json);
    })
    );
  }

  public updateInvestment(investment: Investment): Observable<Investment> {
    return this.http.put<any>(`${this.baseUrl}`, investment).pipe(map((json: string) => {
      return new Investment(json);
    })
    );
  }

  public updateInvestmentPartial(investment: any, investmentId: number): Observable<Investment> {
    return this.http.patch<any>(`${this.baseUrl}/${investmentId}`, investment).pipe(map((json: boolean) => {
      return new Investment(json);
    })
    );
  }

  public deleteInvestment(investmentId: number): Observable<boolean> {
    return this.http.delete<any>(`${this.baseUrl}/${investmentId}`).pipe(map((json: boolean) => {
      return json;
    })
    );
  }
}
