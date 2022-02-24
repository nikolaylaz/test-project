import { Injectable } from '@nestjs/common';
import { DbService } from '../db.service';
import { v4 as uuidv4 } from 'uuid';
import { QuizModel } from './quiz.model';
import { questions } from '../questions';
import { QuestionAnswerRequest } from './dto/question-answer.request';

@Injectable()
export class QuizService {
  constructor(private readonly dbService: DbService) {}

  startQuiz(username: string) {
    const key = uuidv4();
    const data = {
      username,
      answers: {},
    } as QuizModel;
    this.dbService.insert(key, data);
    return { key, firstQuestionId: questions[0].id };
  }

  saveAnswer(userId: string, questionAnswerRequest: QuestionAnswerRequest) {
    const entity = this.dbService.get(userId) as QuizModel;
    entity.answers[questionAnswerRequest.questionId] =
      questionAnswerRequest.answerId;
    this.dbService.update(userId, entity);
  }

  getQuestion(id: string) {
    return questions.find((q) => q.id === id);
  }
}
