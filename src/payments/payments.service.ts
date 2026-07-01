import { Injectable, NotFoundException } from "@nestjs/common";
import { CreatePaymentDto } from "src/payments/dto/create-payment.dto";

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
        const payment = this.payments.find((payment) => payment.id === Number(id));

        if (!payment) {
            throw new NotFoundException(`Payment with id ${id} not found`);
        }

        return payment;
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
