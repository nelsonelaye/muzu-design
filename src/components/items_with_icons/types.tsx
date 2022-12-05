export type format = {
  id: string;
  title: string;
  description: string;
};

export type props = {
  data?: Array<format>;
  heading?: string;
  service?: boolean;
  Icon?: JSX.Element | null;
};
