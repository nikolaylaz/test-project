import { useEffect, useState } from 'react';
import { getQuestion } from '../quiz.service';
import { QuestionModel } from '../question.model';

export function useQuestion(id: string) {
  const [question, setQuestion] = useState<QuestionModel | null>(null);

  useEffect(() => {
    async function loadQuestion(id: string) {
      setQuestion(await getQuestion(id));
    }

    loadQuestion(id);
  }, [id]);

  return question;
}
