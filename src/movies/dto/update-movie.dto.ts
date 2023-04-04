import { PartialType } from '@nestjs/mapped-types';
import { IsNumber, IsString, IsOptional } from 'class-validator';
import { CreateMovie } from './create-movie.dto';

export class UpdateMovieDTO extends PartialType(CreateMovie) {
  @IsString()
  readonly title: string;

  @IsNumber()
  readonly year: number;

  @IsOptional()
  @IsString({ each: true })
  readonly genres: string[];
}
