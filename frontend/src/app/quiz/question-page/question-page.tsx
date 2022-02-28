import { Question } from '../question/question';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuestion } from './use-question';
import { saveQuestion } from '../quiz.service';

export function QuestionPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const question = useQuestion(id as string);

  if (!question) {
    return null;
  }

  const save = async (answerId: string) => {
    const { id } = await saveQuestion(question.id, answerId);
    if (id) {
      navigate(`/quiz/${id}`);
    } else {
      navigate(`/quiz/result`);
    }
  };

  return (
    <div className={'w-1/3'}>
      <Question question={question} nextQuestion={save} />
    </div>
  );
}
