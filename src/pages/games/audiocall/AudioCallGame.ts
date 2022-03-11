import { IAnswer, IWord } from '../../../shared/ts/models';

export const getRandomIndex = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) + min);
};

export const getRandomWordQuestion = (array: Array<IWord>) => {
  const randomIndex = getRandomIndex(0, array.length - 1);
  return array[randomIndex].word;
};

const shuffle = (array: any[]) => {
  const shuffledArray: any[] = [];

  while (array.length > 0) {
    const randomIndex = Math.floor(Math.random() * array.length);

    shuffledArray.push(array[randomIndex]);
    array.splice(randomIndex, 1);
  }

  return shuffledArray;
};

export const getAnswersArray = (arrayStateWords: Array<IWord>, amountAnswers: number) => {
  const copyWords = [...arrayStateWords];
  let answerWord = copyWords.splice(getRandomIndex(0, copyWords.length - 1), 1)[0];
  const resultAnswersArray: Array<IAnswer> = [
    {
      ...answerWord,
      isCorrect: true,
    },
  ];

  while (resultAnswersArray.length < amountAnswers) {
    answerWord = copyWords.splice(getRandomIndex(0, copyWords.length - 1), 1)[0];

    resultAnswersArray.push({
      ...answerWord,
      isCorrect: false,
    });
  }

  return shuffle(resultAnswersArray);
};
