import React from 'react';

import { BookSvg } from '../../svgs'

interface BookProps {
  color: string;
  letter: string;
  letterColor: string;
  size: number;
}

const Book = ({ color, letter, letterColor, size }: BookProps): JSX.Element => {

  const defineSize = (size: number) => {
    switch (size) {
      case 1:
        return 3.5
      case 2:
        return 4.5
      case 3:
        return 5.5
      case 4:
        return 6
      default:
        return 12
    }
  }

  const defineMinHeight = (size: number) => {
    switch (size) {
      case 1:
        return 35
      case 2:
        return 40
      case 3:
        return 50
      case 4:
        return 60
      default:
        return 35
    }
  }

  const defineMaxHeight = (size: number) => {
    switch (size) {
      case 1:
        return 80
      case 2:
        return 90
      case 3:
        return 100
      case 4:
        return 110
      default:
        return 35
    }
  }

  return <BookSvg color={color} letter={letter.toLowerCase()} letterColor={letterColor} width="6vw" height={`${defineSize(size)}vw`} style={{maxHeight: `${defineMaxHeight(size)}px`, maxWidth: `42px`, minWidth: '15px', minHeight: `${defineMinHeight(size)}px`}} />
};

export default Book;
