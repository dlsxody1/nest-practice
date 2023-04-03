import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'This will return all movies';
  }

  @Get('/:id')
  getOne(@Param('id') movieId: string) {
    return `this Will return one ${movieId}`;
  }

  @Post()
  craete(@Body() movidata) {
    console.log(movidata);
    return 'create movie';
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return `movieId ${movieId} doesn't exist...`;
  }

  @Patch('/:id')
  patch(@Param('id') movieId: string, @Body() updateData) {
    return { updateData: movieId, ...updateData };
  }
}
