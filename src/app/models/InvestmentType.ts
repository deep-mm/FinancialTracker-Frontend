export class InvestmentType {
    investmentTypeId: number;
    investmentTypeName: string;

    constructor(json?: any) {
        if (json) {
            this.investmentTypeId = json.investmentTypeId;
            this.investmentTypeName = json.investmentTypeName;
        }
    }
}