import { IsIn, IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

export class CreatePaymentDto {
    @IsString()
    @IsNotEmpty()
    invoiceNo!: string;

    @IsString()
    @IsNotEmpty()
    customer!: string;

    @IsNumber()
    @Min(1)
    amount!: number;

    @IsString()
    @IsIn(['paid', 'pending'])
    status!: string;
}
