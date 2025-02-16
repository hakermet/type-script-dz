import { IsString, IsNotEmpty } from 'class-validator';

export class RouteBDto {
    @IsString()
    @IsNotEmpty()
    start: string;

    @IsString()
    @IsNotEmpty()
    end: string;
} 