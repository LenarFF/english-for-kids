type DataType = {
  gameMode: boolean,
  categoryIndex: number,
  arrayOfIndexes: number[],
  lastIndex: number,
  numberOfMistakes: number,
  GameEndTime: number
};

export const data: DataType = {
  gameMode: false,
  categoryIndex: 0,
  arrayOfIndexes: [],
  lastIndex: -1,
  numberOfMistakes: 0,
  GameEndTime: 3000
};
