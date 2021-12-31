import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Investment } from '../models/Investment';
import { InvestmentType } from '../models/InvestmentType';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-investment',
  templateUrl: './investment.component.html',
  styleUrls: ['./investment.component.scss']
})
export class InvestmentComponent implements OnInit {

  investments: Investment[] = [];
  loading: boolean = false;

  constructor(public _apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.loading = true;
    this._apiService.getAllInvestments().subscribe((investments: Investment[]) => {
      this.investments = investments;
      this.loading = false;
    },
      error => {
        this.loading = false;
        console.error('Error occurred while retrieving list of investment types from the database. Error: ' + error);
      });
  }

  AddParticipant(){
    this.router.navigate(['investment/new']);
  }

}
