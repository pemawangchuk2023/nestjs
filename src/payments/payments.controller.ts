import { Controller, Get } from "@nestjs/common";
import { PaymentsService } from "src/payments/payments.service";


@Controller('payments')
export class PaymentsController {
    constructor(
        private readonly paymentsService: PaymentsService
    ) {
    }
    @Get()
    public findAll() {
        return this.paymentsService.findAll();
    }
}