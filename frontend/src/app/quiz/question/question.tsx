import { QuestionOption } from './question-option/question-option';
import { UiButton } from '@shared/ui/button/ui-button';

export function Question() {
  const options = [
    { value: 'USA', text: 'USA' },
    { value: 'BG', text: 'Bulgaria' },
    { value: 'CA', text: 'Canada' },
  ];

  const next = () => {};

  const onChangeValue = (e: any) => {
    console.log(e.target.value);
  };

  return (
    <div onChange={onChangeValue}>
      <p className={'text-bold text-2xl mb-4'}>Test question</p>
      <div className={'space-y-4 mb-6'}>
        {options.map((o) => (
          <QuestionOption key={o.value} value={o.value} text={o.text} />
        ))}
      </div>
      <UiButton onClick={next}>Next</UiButton>
    </div>
  );
}
