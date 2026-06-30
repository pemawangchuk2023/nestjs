import { Injectable } from "@nestjs/common";

@Injectable()
export class PaymentsService {
    private payments = [
        {
            id: 1,
            invoiceNo: 'BTN-001',
            customer: 'Pema Traders',
            amount: 1500,
            status: 'paid',
        },
        {
            id: 2,
            invoiceNo: 'BTN-002',
            customer: 'Tashi Store',
            amount: 2200,
            status: 'pending',
        },

    ];

    public findAll() {
        return this.payments;
    }
}