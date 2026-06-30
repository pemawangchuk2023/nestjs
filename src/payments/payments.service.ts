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
    public findAll(status?: string) {
        if (status) {
            return this.payments.filter((payment) => payment.status === status);
        }

        return this.payments;
    }

    public findOne(id: string) {
        return this.payments.find((payment) => payment.id === Number(id));
    }
}
