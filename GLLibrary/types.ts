// GLLibrary TypeScript

export interface AppStateProps {
  vs?: string;
  user: UserProps | null;
  authorising: boolean;
  notification: NotificationProps | null;
  newsfeed: NewsItemProps[];
}

export interface NewsItemProps {
  id: string;
  title: string;
  subheader?: string;
  action?: "internal-nav" | "external-nav",
  route?: string;
  image?: string;
  icon?: string;
}

export interface UserProps {
  uid: string;
  email: string;
}

export interface ContentProps {
  title: string;
  description: string;
  path: string;
  img?: ImageProps;
}

export interface ImageProps {
  src: string;
  alt: string;
  caption?: string;
  icon?: string;
}

export type KeyValueProps = {
  key: string;
  value: any;
};

export type NotificationProps = {
  code: string;
  severity: 'success' | 'info' | 'warning' | 'error' | undefined;
  message: string;
};

export type Error = {
  time: number;
  severity: string;
  code: string;
  message: string;
  stack: any;
};
