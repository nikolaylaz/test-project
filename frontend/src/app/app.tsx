import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { QuestionPage } from './quiz/question-page/question-page';
import { LandingPage } from './landing-page/landing-page';
import { QuizResultPage } from './quiz/quiz-result-page/quiz-result-page';
import { SetNamePage } from './quiz/set-name-page/set-name-page';

export function App() {
  return (
    <div className={'min-h-screen flex justify-center items-center'}>
      <Routes>
        <Route path="/quiz/set-name" element={<SetNamePage />} />
        <Route path="/quiz/result" element={<QuizResultPage />} />
        <Route path="/quiz/:id" element={<QuestionPage />} />
        <Route index element={<LandingPage />} />
      </Routes>
    </div>
  );
}
