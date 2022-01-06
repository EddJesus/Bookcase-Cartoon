declare module '*.svg' {
  export const content: any
}

declare type BookType = {
  id: string;
  color: string;
  letter: string;
  letterColor: string;
  size: number;
}