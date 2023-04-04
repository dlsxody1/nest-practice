import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entity/Movies.entity';

@Controller('movies')
export class MoviesController {
  constructor(readonly moviesService: MoviesService) {}
  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }

  @Get('/:id')
  getOne(@Param('id') movieId: number): Movie {
    const movie = this.moviesService.getOne(movieId);
    if (!movie) {
      throw new NotFoundException(`Movie with ID ${movieId} not found`);
    }
    return movie;
  }

  @Post()
  craete(@Body() movidata) {
    return this.moviesService.createMovie(movidata);
  }

  @Delete('/:id')
  remove(@Param('id') movieId: number) {
    return this.moviesService.deleteOne(movieId);
  }

  @Patch('/:id')
  patch(@Param('id') movieId: number, @Body() updateData) {
    return this.moviesService.update(movieId, updateData);
  }
}
