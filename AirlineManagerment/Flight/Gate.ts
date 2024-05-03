
export class Gate{
    private gateId:number;
    private status:string;
    private location:string;

    constructor(gateId:number, status:string, location:string){
        this.gateId = gateId;
        this.status = status;
        this.location = location;
    }

    public getGateId():number{
        return this.gateId;
    }
}