export class CreatePaymentDto {
    invoiceNo!: string;
    customer!: string;
    amount!: number;
    status!: string;
}