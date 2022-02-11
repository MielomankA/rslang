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

export interface IHeaderProps {
  username: string;
}
