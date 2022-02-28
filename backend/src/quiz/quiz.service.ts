import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DbService } from '../db/db.service';
import { v4 as uuidv4 } from 'uuid';
import { QuizModel } from './quiz.model';
import { questions } from '../questions';
import { QuestionAnswerRequest } from './dto/request/question-answer.request';
import { QuestionResponse } from './dto/response/question.response';
import { NextQuestionResponse } from './dto/response/next-question.response';
import {
  QuizResultResponse,
  ResultType,
} from './dto/response/quiz-result.response';

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

  saveAnswer(
    userId: string,
    questionAnswerRequest: QuestionAnswerRequest,
  ): NextQuestionResponse {
    const entity = this.dbService.get(userId) as QuizModel;

    this.checkOptionExists(
      questionAnswerRequest.questionId,
      questionAnswerRequest.answerId,
    );

    entity.answers[questionAnswerRequest.questionId] =
      questionAnswerRequest.answerId;
    this.dbService.update(userId, entity);
    return new NextQuestionResponse(
      this.getNextQuestion(questionAnswerRequest.questionId),
    );
  }

  getQuestion(id: string, userId: string): QuestionResponse {
    const question = this.findQuestion(id);
    const entity = this.dbService.get(userId) as QuizModel;
    const answerId = entity.answers[question.id];
    return new QuestionResponse(question, answerId);
  }

  findQuestion(questionId: string) {
    const question = questions.find((q) => q.id === questionId);
    if (!question) {
      throw new HttpException('Missing question', HttpStatus.BAD_REQUEST);
    }

    return question;
  }

  checkOptionExists(questionId: string, optionId: string) {
    const question = questions.find((q) => q.id === questionId);
    if (!question) {
      throw new HttpException('Missing question', HttpStatus.BAD_REQUEST);
    }

    const answer = question.options.find((q) => q.id === optionId);

    if (!answer) {
      throw new HttpException(
        'Missing question option',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  calculateResult(userId: string) {
    const entity = this.dbService.get(userId) as QuizModel;

    if (!entity) {
      throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
    }

    if (Object.keys(entity.answers).length !== questions.length) {
      throw new HttpException(
        'Not all questions have been answered',
        HttpStatus.BAD_REQUEST,
      );
    }

    let score = 0;
    for (const questionId in entity.answers) {
      score += this.getOptionScore(questionId, entity.answers[questionId]);
    }

    return new QuizResultResponse(
      score > 14 ? ResultType.Extrovert : ResultType.Introvert,
      entity.username,
    );
  }

  private getOptionScore(questionId: string, optionId: string): number {
    const question = questions.find((q) => q.id === questionId);
    return question.options.find((o) => o.id === optionId).score;
  }

  private getNextQuestion(questionId: string): string | null {
    const questionIndex = questions.findIndex((q) => q.id === questionId);

    if (questionIndex + 1 < questions.length) {
      return questions[questionIndex + 1].id;
    } else {
      return null;
    }
  }
}
