import { Module } from '@nestjs/common';
import { QuizModule } from './quiz/quiz.module';
import { DbService } from './db.service';

@Module({
  imports: [QuizModule],
  controllers: [],
  providers: [DbService],
})
export class AppModule {
  constructor() {}
}
