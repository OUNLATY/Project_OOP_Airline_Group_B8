class Airline{
    private name: string;
    private location: string;
    private airlineCode: string;

    constructor(name: string, location: string, airlineCode: string){
        this.name = name;
        this.location = location;
        this.airlineCode = airlineCode;
    }

    public getName(): string{
        return this.name;
    }

    public getLocation(): string{
        return this.location;
    }

    public getAirlineCode(): string{
        return this.airlineCode;
    }
}