import { IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty({ message: 'El nombre es requerido' })
  name: string;

  @IsNumber()
  @IsPositive({ message: 'Ingresa un precio positivo' })
  unitPrice: number;
}