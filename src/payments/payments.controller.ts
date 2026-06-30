import { Controller, Get, Param } from "@nestjs/common";
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

    @Get(':id')
    public findOne(@Param('id') id: string) {
        return this.paymentsService.findOne(id);
    }
}
