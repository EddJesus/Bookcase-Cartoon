import React from 'react';

import { BookSvg } from '../../svgs'

interface BookProps {
  color: string;
  letter: string;
  letterColor: string
}

const Book = ({ color, letter, letterColor }: BookProps): JSX.Element => {
  return <BookSvg color={color} letter={letter.toLowerCase()} letterColor={letterColor} width={"6vw"} height={"12vw"} style={{maxHeight: "80px", maxWidth: "40px"}} />
};

export default Book;
