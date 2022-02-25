import { IsNotEmpty } from 'class-validator';

export class QuizStartRequest {
  @IsNotEmpty()
  name: string;
}
