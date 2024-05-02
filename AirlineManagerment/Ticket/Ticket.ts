//TODO:

export class Ticket {
    private bookingReferenceNumber: string;
    private isReturnTicket: boolean;  // Added property to indicate if it's a return ticket
    constructor(bookingReferenceNumber: string,isReturnTicket: boolean){
        this.bookingReferenceNumber = bookingReferenceNumber;
        this.isReturnTicket = isReturnTicket;
    }
     
    getBookingReferenceNumber() {
        return this.bookingReferenceNumber;
    }
    hasReturnTicket(): boolean {
        return this.isReturnTicket;
    }
}

