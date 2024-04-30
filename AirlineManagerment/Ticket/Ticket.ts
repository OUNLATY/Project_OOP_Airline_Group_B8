//TODO:

export class Ticket {
    private bookingReferenceNumber: string;
    constructor(bookingReferenceNumber: string){
        this.bookingReferenceNumber = bookingReferenceNumber;
    }
     
    getBookingReferenceNumber() {
        return this.bookingReferenceNumber;
    }
}

