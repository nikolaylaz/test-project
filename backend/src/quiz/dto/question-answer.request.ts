import { IsNotEmpty } from 'class-validator';

export class QuestionAnswerRequest {
  @IsNotEmpty()
  questionId: string;

  @IsNotEmpty()
  answerId: string;
}
