import { IsString } from "class-validator";



export class CreateFarmDto {
    @IsString()
    readonly name: string;
    @IsString()
    readonly director: string;
}