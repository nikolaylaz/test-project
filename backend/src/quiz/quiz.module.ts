import { Module } from '@nestjs/common';
import { QuizController } from './quiz.controller';
import { QuizService } from './quiz.service';
import { DbModule } from '../db/db.module';

@Module({
  imports: [DbModule],
  providers: [QuizService],
  controllers: [QuizController],
})
export class QuizModule {}
