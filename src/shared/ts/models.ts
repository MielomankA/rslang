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
