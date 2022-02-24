import { Module } from '@nestjs/common';
import { QuizController } from './quiz.controller';
import { QuizService } from './quiz.service';

@Module({
  providers: [QuizService],
  controllers: [QuizController],
})
export class QuizModule {}
