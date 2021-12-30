export class InvestmentStatus {
    investmentStatusId: number;
    investmentStatusName: string;

    constructor(json?: any) {
        if (json) {
            this.investmentStatusId = json.investmentStatusId;
            this.investmentStatusName = json.investmentStatusName;
        }
    }
}