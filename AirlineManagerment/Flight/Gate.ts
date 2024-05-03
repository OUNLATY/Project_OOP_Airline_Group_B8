
export class Gate{
    private gateId:string;
    private status:string;
    private location:string;

    constructor(gateId:string, status:string, location:string){
        this.gateId = gateId;
        this.status = status;
        this.location = location;
    }

    public getGateId():string{
        return this.gateId;
    }
}