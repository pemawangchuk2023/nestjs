import { Module } from '@nestjs/common';
import { PaymentsController } from 'src/payments/payments.controller';
import { PaymentsRepository } from 'src/payments/payments.repository';
import { PaymentsService } from 'src/payments/payments.service';


@Module({
    controllers: [PaymentsController],
    providers: [PaymentsService, PaymentsRepository],
})
export class PaymentsModule { }