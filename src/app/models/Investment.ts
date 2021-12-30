import { InvestmentStatus } from "./InvestmentStatus";
import { InvestmentType } from "./InvestmentType";
import { Member } from "./Member";

export class Investment {
    investmentId: number;
    investmentTypeId: number;
    investmentType: InvestmentType;
    investmentDate: Date;
    investmentName: string;
    investmentAmount: number;
    memberId: number;
    member: Member;
    investmentStatusId: number;
    investmentStatus: InvestmentStatus;
    notes: string; 

    constructor(json?: any) {
        if (json) {
            this.investmentId = json.investmentId;
            this.investmentTypeId = json.investmentTypeId;
            this.investmentType = new InvestmentType(json.investmentType);
            this.investmentDate = json.investmentDate != null ? new Date(json.investmentDate) : null;
            this.investmentName = json.investmentName;
            this.investmentAmount = json.investmentAmount;
            this.memberId = json.memberId;
            this.member = new Member(json.member);
            this.investmentStatusId = json.investmentStatusId;
            this.investmentStatus = new InvestmentStatus(json.investmentStatus);
            this.notes = json.notes;
        }
    }
}