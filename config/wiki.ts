export const createRandomTable = (rates: number[]): number[] => {
  const result = [];
  for (let i = 0; i < rates.length; i++) {
    for (let j = 0; j < rates[i]; j++) {
      result.push(i);
    }
  }

  return result;
};
