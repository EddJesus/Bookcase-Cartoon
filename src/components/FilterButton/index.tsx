import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './FilterButton.styles';

import { FilterAlphabetic, FilterSizes, FilterColors } from '../../svgs'

interface FilterButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  active: boolean;
  filterType: "colors" | "size" | "alphabetics";
}

const FilterButton = (props: FilterButtonProps) => {

  return (
    <Container {...props}>
      { props.filterType === "size" ? 
        <FilterSizes /> :
        props.filterType === "alphabetics" ?
        <FilterAlphabetic /> :
        <FilterColors />
      }
      
    </Container>
  );
};

export default FilterButton;
