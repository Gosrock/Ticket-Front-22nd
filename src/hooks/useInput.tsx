import { useState, ChangeEventHandler } from 'react';

interface Bind<T> {
  value: T;
  onChange: ChangeEventHandler<any>;
}

const useInput = <T,>(initialValue: T) => {
  const [value, setValue] = useState<T>(initialValue);

  const reset = () => {
    setValue(initialValue);
  };

  const bind: Bind<T> = {
    value,
    onChange: (e) => {
      setValue(e.target.value);
    },
  };

  return [value, bind, reset] as const;
};

export default useInput;
