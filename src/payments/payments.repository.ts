import { Injectable } from "@nestjs/common";
import { CreatePaymentDto } from "src/payments/dto/create-payment.dto";

type Payment = CreatePaymentDto & {
    id: number;
};

@Injectable()
export class PaymentsRepository {
    private payments: Payment[] = [
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

    public findById(id: number) {
        return this.payments.find((payment) => payment.id === id);
    }

    public create(createPaymentDto: CreatePaymentDto) {
        const payment = {
            id: this.payments.length + 1,
            ...createPaymentDto,
        };

        this.payments.push(payment);

        return payment;
    }
}
