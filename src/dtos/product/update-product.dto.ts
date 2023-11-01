import { PartialType } from "@nestjs/swagger";
import { BaseProductDto } from "./base-product.dto";


export class UpdateProdcutDto extends PartialType(BaseProductDto){

}