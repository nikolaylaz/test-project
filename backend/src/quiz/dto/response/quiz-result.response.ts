export enum ResultType {
  Introvert = 'Introvert',
  Extrovert = 'Extrovert',
}

export class QuizResultResponse {
  result: ResultType;
  name: string;

  constructor(result: ResultType, name: string) {
    this.result = result;
    this.name = name;
  }
}
