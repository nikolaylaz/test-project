import { Question, QuestionOption } from '../../../questions';

export class QuestionOptionResponse {
  id: string;
  option: string;

  constructor(option: QuestionOption) {
    this.id = option.id;
    this.option = option.option;
  }
}

export class QuestionResponse {
  id: string;
  name: string;
  options: QuestionOptionResponse[];
  answerId: string | null;

  constructor(question: Question, answerId: string = null) {
    this.id = question.id;
    this.name = question.name;
    this.options = question.options.map((o) => new QuestionOptionResponse(o));
    this.answerId = answerId;
  }
}
