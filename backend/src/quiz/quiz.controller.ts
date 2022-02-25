import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  Res,
  Request,
} from '@nestjs/common';
import { QuizService } from './quiz.service';
import { QuizStartRequest } from './dto/request/quiz-start.request';
import { QuestionAnswerRequest } from './dto/request/question-answer.request';
import { Auth } from '../auth/auth.decorator';
import { COOKIE_KEY } from '../auth/auth.constants';

@Controller('quiz')
export class QuizController {
  constructor(private readonly questionService: QuizService) {}

  @Post('start')
  startQuiz(
    @Body() quiz: QuizStartRequest,
    @Res({ passthrough: true }) response: any,
  ) {
    const { key, firstQuestionId } = this.questionService.startQuiz(quiz.name);
    response.cookie(COOKIE_KEY, key, { httpOnly: true, signed: true });
    return {
      firstQuestionId,
    };
  }

  @Get('question/:id')
  @Auth()
  getQuestion(@Param('id') id: string, @Req() request: Request) {
    return this.questionService.getQuestion(
      id,
      request['signedCookies'][COOKIE_KEY],
    );
  }

  @Post('question/save')
  @Auth()
  saveAnswer(
    @Req() request: Request,
    @Body() questionAnswerRequest: QuestionAnswerRequest,
  ) {
    return this.questionService.saveAnswer(
      request['signedCookies'][COOKIE_KEY],
      questionAnswerRequest,
    );
  }

  @Get('result')
  @Auth()
  getResult(@Req() request: Request) {
    return this.questionService.calculateResult(
      request['signedCookies'][COOKIE_KEY],
    );
  }
}
