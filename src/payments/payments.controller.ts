import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { CreatePaymentDto } from "src/payments/dto/create-payment.dto";
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

    @Post()
    public create(@Body() createPaymentDto: CreatePaymentDto) {
        return this.paymentsService.create(createPaymentDto);
    }
}
