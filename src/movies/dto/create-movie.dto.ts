import { IsNumber, IsString } from 'class-validator';

export class CreateMovie {
  // 무비 object에 들어갈 값들의 유효성을 검사하기위함.
  // readonly는 왜 쓰는걸까?

  @IsString()
  readonly title: string;
  @IsNumber()
  readonly year: number;
  @IsString({ each: true })
  readonly genres: string[];
}
