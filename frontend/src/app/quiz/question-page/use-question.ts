import { useEffect, useState } from 'react';
import { getQuestion } from '../quiz.service';
import { QuestionModel } from '../question.model';
import { useNavigate } from 'react-router-dom';

export function useQuestion(id: string) {
  const [question, setQuestion] = useState<QuestionModel | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadQuestion(id: string) {
      try {
        const q = await getQuestion(id);
        setQuestion(q);
      } catch (ex) {
        navigate('/');
      }
    }

    loadQuestion(id);
  }, [id]);

  return question;
}
