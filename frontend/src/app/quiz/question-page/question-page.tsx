import { Question } from '../question/question';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

export function QuestionPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  return (
    <div>
      <Question />
    </div>
  );
}
