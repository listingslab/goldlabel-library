export interface AppStateProps {
  vs?: string;
  user: UserProps | null;
  authorising: boolean;
  notification: Notification | null;
}

export interface UserProps {
  uid: string;
  email: string;
}

export interface ContentProps {
  title: string;
  description: string;
  path: string;
  img?: ImgShape;
}

export interface ImgShape {
  src: string;
  alt: string;
  caption?: string;
  icon?: string;
}

export type KeyValueShape = {
  key: string;
  value: any;
};

export type Notification = {
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
