export class Member {
    memberId: number;
    memberName: string;

    constructor(json?: any) {
        if (json) {
            this.memberId = json.memberId;
            this.memberName = json.memberName;
        }
    }
}