import { useEffect, useState } from 'react';
import { getResult } from '../quiz.service';

export function useResult() {
  const [result, setResult] = useState<any>();

  useEffect(() => {
    async function loadResult() {
      const { result, name } = await getResult();
      setResult({ result, name });
    }

    loadResult();
  }, []);

  return result;
}
