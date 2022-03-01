import { QuestionOption } from './question-option/question-option';
import { UiButton } from '@shared/ui/button/ui-button';
import { QuestionModel } from '../question.model';
import { useEffect, useState } from 'react';

export interface QuestionProps {
  question: QuestionModel;
  nextQuestion: (value: string) => void;
}

export function Question({ question, nextQuestion }: QuestionProps) {
  const [value, setValue] = useState<string | null>(question.answerId);
  const next = () => {
    nextQuestion(value as string);
  };

  useEffect(() => {
    setValue(question.answerId);
  }, [question]);

  const onChangeValue = (e: any) => {
    setValue(e.target.value);
  };

  return (
    <div onChange={onChangeValue}>
      <p className={'text-bold text-2xl mb-4'}>{question.name}</p>
      <div className={'space-y-4 mb-6'}>
        {question.options.map((o) => (
          <QuestionOption
            key={o.id}
            value={o.id}
            text={o.option}
            isDefault={question.answerId === o.id}
          />
        ))}
      </div>
      <UiButton disabled={!value} onClick={next}>
        Next
      </UiButton>
    </div>
  );
}
