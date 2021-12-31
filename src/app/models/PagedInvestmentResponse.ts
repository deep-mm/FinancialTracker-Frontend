import { Investment } from "./Investment";

export class PagedInvestmentResponse {
    totalRecords: number;
    investments: Investment[];

    constructor(json?: any) {
        if (json) {
            this.totalRecords = json.totalRecords;
            this.investments = [];
            for (const investment of json.investments) {
                this.investments.push(new Investment(investment));
            }
        }
    }
}