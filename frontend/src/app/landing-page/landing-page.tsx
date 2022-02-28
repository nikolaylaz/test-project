import { UiButton } from '@shared/ui/button/ui-button';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export function LandingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.clear();
  });

  const startTestAndNavigate = async () => {
    navigate('quiz/set-name');
  };

  return (
    <div className={'flex items-center justify-center flex-col'}>
      <h1 className={'text-4xl mb-8'}>Find your personality trait</h1>
      <UiButton onClick={startTestAndNavigate}>Start</UiButton>
    </div>
  );
}
