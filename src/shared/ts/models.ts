export interface IAdvantageCardProps {
  title: string;
  description: string;
}

export interface IDeveloperCardProps {
  avatarUrl: string;
  name: string;
  githubUrl: string;
  jobStatus: string;
  description: string;
}

export interface IPostRequestUserData {
  name: string;
  email: string;
  password: string;
}

export interface IPostResponseAuth {
  id: string;
  name: string;
  email: string;
}

export interface ISigninData {
  email: string;
  password: string;
}

export interface IRegisterData extends ISigninData {
  name: string;
}

export interface IRequestConfig<Url extends string, Data extends ISigninData> {
  endpointUrl: Url;
  data: Data;
}

export type RequestConfig = IRequestConfig<'signin', ISigninData> | IRequestConfig<'users', IRegisterData>;

export interface IWord {
  id: string;
  group: number;
  page: number;
  word: string;
  image: string;
  audio: string;
  audioMeaning: string;
  audioExample: string;
  textMeaning: string;
  textExample: string;
  transcription: string;
  wordTranslate: string;
  textMeaningTranslate: string;
  textExampleTranslate: string;
}

export interface IWordCardProps {
  wordInfo: Omit<IWord, 'group' | 'page'>;
}

export interface IGameCardProps {
  text: string;
}

export interface ITextbookGroupsButtonsProps {
  setGroup: (group: number) => void;
}
