export interface QuestionOptionProps {
  value: string;
  text: string;
  isDefault: boolean;
}

export function QuestionOption({
  value,
  text,
  isDefault,
}: QuestionOptionProps) {
  const id = `question_${value}`;
  return (
    <div className="flex items-center ">
      <input
        id={id}
        type="radio"
        name="question"
        value={value}
        className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 cursor-pointer"
        defaultChecked={isDefault}
      />
      <label
        htmlFor={id}
        className="block ml-2 text-sm font-medium text-gray-900 cursor-pointer"
      >
        {text}
      </label>
    </div>
  );
}
