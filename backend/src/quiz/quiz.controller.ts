import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { QuizStartRequest } from './dto/quiz-start.request';
import { QuestionAnswerRequest } from './dto/question-answer.request';

@Controller('quiz')
export class QuizController {
  constructor(private readonly questionService: QuizService) {}

  @Post('start')
  startQuiz(
    @Body() quiz: QuizStartRequest,
    @Res({ passthrough: true }) response: any,
  ) {
    const { key, firstQuestionId } = this.questionService.startQuiz(quiz.name);
    response.cookie('userId', key, { httpOnly: true, signed: true });
    return {
      firstQuestionId,
    };
  }

  @Get('question/:id')
  getQuestion(@Param('id') id: string) {
    return this.questionService.getQuestion(id);
  }

  @Post('question/:id/save')
  saveAnswer(
    @Param('id') id: string,
    @Body() questionAnswerRequest: QuestionAnswerRequest,
  ) {
    this.questionService.saveAnswer(id, questionAnswerRequest);
  }
}
