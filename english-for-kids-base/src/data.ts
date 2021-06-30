type DataType = {
  gameMode: boolean,
  categoryIndex: number,
  arrayOfIndexes: number[],
  lastIndex: number,
  numberOfMistakes: number,
  gameEndTime: number,
  lastAnswer: boolean
};

export const data: DataType = {
  gameMode: false,
  categoryIndex: 0,
  arrayOfIndexes: [],
  lastIndex: -1,
  numberOfMistakes: 0,
  gameEndTime: 3000,
  lastAnswer: false,
};
