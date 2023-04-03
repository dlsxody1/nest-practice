import { Get, Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';

//데코레이터 클래스위의 함수.
@Module({
  imports: [],
  controllers: [MoviesController],
  providers: [],
})
export class AppModule {}
