import { IsNotEmpty, IsNumber, IsOptional, IsString } from "@nestjs/class-validator";

export class CreateCourseDto {
    @IsString()
    @IsNotEmpty()
    name: string;
  
    @IsNumber()
    @IsNotEmpty()
    score: number;
  }

  export class UpdateCourseDto {
    @IsString()
    @IsOptional()
    name?: string;
  
    @IsNumber()
    @IsOptional()
    score?: number;
  }
  
  