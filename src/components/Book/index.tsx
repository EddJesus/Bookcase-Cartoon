import React from 'react';

import { BookSvg } from '../../svgs'

type BookProps = {
  color: string;
  letter: string;
}

const Book = ({ color, letter }: BookProps) => {
  return <BookSvg color={color} letter={letter.toLowerCase()} width={"6vw"} height={"12vw"} style={{maxHeight: "80px", maxWidth: "40px"}}/>;
};

export default Book;
