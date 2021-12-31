import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Investment } from '../models/Investment';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-add-investment',
  templateUrl: './add-investment.component.html',
  styleUrls: ['./add-investment.component.scss']
})
export class AddInvestmentComponent implements OnInit {

  newInvestment: Investment = new Investment({
    "investmentTypeId": 1,
    "investmentStatusId": 1,
    "memberId": 1,
    "investmentId": 0
  });
  loading: boolean = false;

  constructor(public _apiService: ApiService, private router: Router) { }

  ngOnInit(): void {

  }

  submitForm() {
    this.loading = true;
    this._apiService.addInvestment(this.newInvestment).subscribe(
      (data) => {
        console.log(data);
        this.loading = false;
        this.router.navigate(['home']);
      },
      (err) => {
        console.log(err);
        this.loading = false;
      }
    );
  }

}
