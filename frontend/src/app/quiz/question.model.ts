export interface QuestionModel {
  id: string;
  name: string;
  options: QuestionOption[];
  answerId: string | null;
}

export interface QuestionOption {
  id: string;
  option: string;
}
