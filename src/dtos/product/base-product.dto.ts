import { Allow, IsAlpha, IsAlphanumeric, IsNotEmpty, IsNumber, IsPositive, IsString } from "class-validator";


export class BaseProductDto{
    @Allow()
   // @IsNotEmpty(isNotEmptyValidationOptions())
    @IsString()
    @IsAlpha()
    readonly title;

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    readonly price;

    @IsNotEmpty()
    @IsAlphanumeric()
    readonly descripcion;

    @IsNotEmpty()
    @IsAlphanumeric()
    readonly image;
    
}