export enum ResultType {
  Introvert = 'Introvert',
  Extrovert = 'Extrovert',
}

export class QuizResultResponse {
  result: ResultType;

  constructor(result: ResultType) {
    this.result = result;
  }
}
