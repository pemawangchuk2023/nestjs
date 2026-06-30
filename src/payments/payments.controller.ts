import { Controller, Get, Param, Query } from "@nestjs/common";
import { PaymentsService } from "src/payments/payments.service";


@Controller('payments')
export class PaymentsController {
    constructor(
        private readonly paymentsService: PaymentsService
    ) {
    }

    @Get()
    public findAll(@Query('status') status?: string) {
        return this.paymentsService.findAll(status);
    }

    @Get(':id')
    public findOne(@Param('id') id: string) {
        return this.paymentsService.findOne(id);
    }
}
