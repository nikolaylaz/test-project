import { UiInput } from '@shared/ui/input/ui-input';
import { useState } from 'react';
import { UiButton } from '@shared/ui/button/ui-button';
import { useNavigate } from 'react-router-dom';
import { startQuiz } from '../quiz.service';
import { AUTH_TOKEN_KEY } from '../../constants';

export function SetNamePage() {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const showFirst = async () => {
    const resp = await startQuiz(name);
    sessionStorage.setItem(AUTH_TOKEN_KEY, resp.token);
    navigate(`/quiz/${resp.firstQuestionId}`);
  };

  return (
    <div>
      <UiInput
        label={'Your name'}
        placeholder={'Satoshi Nakamoto'}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <UiButton onClick={showFirst} disabled={name === ''}>
        Go To first question
      </UiButton>
    </div>
  );
}
