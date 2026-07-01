import { Injectable, NotFoundException } from "@nestjs/common";
import { CreatePaymentDto } from "src/payments/dto/create-payment.dto";
import { PaymentsRepository } from "src/payments/payments.repository";

@Injectable()
export class PaymentsService {
    constructor(
        private readonly paymentsRepository: PaymentsRepository,
    ) { }

    public findAll(status?: string) {
        return this.paymentsRepository.findAll(status);
    }

    public findOne(id: string) {
        const payment = this.paymentsRepository.findById(Number(id));

        if (!payment) {
            throw new NotFoundException(`Payment with id ${id} not found`);
        }

        return payment;
    }

    public create(createPaymentDto: CreatePaymentDto) {
        return this.paymentsRepository.create(createPaymentDto);
    }
}
