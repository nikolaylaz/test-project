import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  Res,
  Request,
  Headers,
} from '@nestjs/common';
import { QuizService } from './quiz.service';
import { QuizStartRequest } from './dto/request/quiz-start.request';
import { QuestionAnswerRequest } from './dto/request/question-answer.request';
import { Auth } from '../auth/auth.decorator';
import { AUTH_HEADER } from '../auth/auth.constants';

@Controller('quiz')
export class QuizController {
  constructor(private readonly questionService: QuizService) {}

  @Post('start')
  startQuiz(@Body() quiz: QuizStartRequest) {
    const { key, firstQuestionId } = this.questionService.startQuiz(quiz.name);
    return {
      token: key,
      firstQuestionId,
    };
  }

  @Get('question/:id')
  @Auth()
  getQuestion(@Param('id') id: string, @Headers(AUTH_HEADER) auth: string) {
    return this.questionService.getQuestion(id, auth);
  }

  @Post('question/save')
  @Auth()
  saveAnswer(
    @Headers(AUTH_HEADER) auth: string,
    @Body() questionAnswerRequest: QuestionAnswerRequest,
  ) {
    return this.questionService.saveAnswer(auth, questionAnswerRequest);
  }

  @Get('result')
  @Auth()
  getResult(@Headers(AUTH_HEADER) auth: string) {
    return this.questionService.calculateResult(auth);
  }
}
