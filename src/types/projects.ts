
export type ProjectType = {
  title: string;
  description: string;
  thumbnail: string;
  images: string[];
  href: string;
  slug?: string;
  stack?: string[];
  content?: React.ReactNode | string;
};