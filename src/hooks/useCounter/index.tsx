import { useState } from "react";

const useCounter = (initialValue: number = 0) => {
  const [current, setCurrent] = useState(initialValue);

  const add = (number = 1) => setCurrent((v) => v + number);
  const dec = (number = 1) => setCurrent((v) => v - number);
  const set = (number = 1) => setCurrent(number);

  return [
    current,
    {
      add,
      dec,
      set,
    },
  ] as const;
};

export default useCounter;
