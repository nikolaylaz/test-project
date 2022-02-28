import { useResult } from './use-result';
import { UiButton } from '@shared/ui/button/ui-button';
import { useNavigate } from 'react-router-dom';

export function QuizResultPage() {
  const result = useResult();
  const navigate = useNavigate();

  if (!result) {
    return null;
  }

  return (
    <div className={'flex items-center justify-center flex-col'}>
      <h1 className={'text-4xl mb-2 font-light'}>Your Result:</h1>
      <p className={'mb-4 text-3xl font-bold'}>
        {result.name} - {result.result}
      </p>
      <UiButton onClick={() => navigate('/')}>Start new</UiButton>
    </div>
  );
}
