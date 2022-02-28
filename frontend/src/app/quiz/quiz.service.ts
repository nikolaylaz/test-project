import { sendGet, sendPost } from '@shared/http/http';

export function startQuiz(name: string) {
  return sendPost('quiz/start', { name });
}

export function getQuestion(id: string) {
  return sendGet(`quiz/question/${id}`);
}

export function saveQuestion(questionId: string, answerId: string) {
  return sendPost(`quiz/question/save`, { questionId, answerId });
}

export function getResult() {
  return sendGet(`quiz/result`);
}
