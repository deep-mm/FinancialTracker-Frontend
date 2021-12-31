import { Component, OnInit } from '@angular/core';
import { InvestmentType } from '../models/InvestmentType';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-investment',
  templateUrl: './investment.component.html',
  styleUrls: ['./investment.component.scss']
})
export class InvestmentComponent implements OnInit {

  investmentTypes: InvestmentType[] = [];

  constructor(public _apiService: ApiService) { }

  ngOnInit(): void {
    this._apiService.getInvestmentTypes().subscribe((investmentTypes: InvestmentType[]) => {
      this.investmentTypes = investmentTypes;
    },
      error => {
        console.error('Error occurred while retrieving list of investment types from the database. Error: ' + error);
      });
  }

}
