export class ActiveInvestment {
    investmentName: string;
    investmentDate: Date;
    investmentAmount: number;
    investmentTypeName: string;

    constructor(json?: any) {
        if (json) {
            this.investmentName = json.investmentName;
            this.investmentDate = json.investmentDate != null ? new Date(json.investmentDate) : null;
            this.investmentAmount = json.investmentAmount;
            this.investmentTypeName = json.investmentTypeName;
        }
    }
}