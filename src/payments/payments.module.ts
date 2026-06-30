import { Module } from '@nestjs/common';
import { PaymentsController } from 'src/payments/payments.controller';
import { PaymentsService } from 'src/payments/payments.service';


@Module({
    controllers: [PaymentsController],
    providers: [PaymentsService],
})
export class PaymentsModule { }