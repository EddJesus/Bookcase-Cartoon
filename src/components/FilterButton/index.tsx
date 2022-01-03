import React, { useState } from 'react';

import { Container } from './FilterButton.styles';

import { FilterAlphabetic, FilterSizes, FilterColors } from '../../svgs'

type FilterButtonProps = {
  active: boolean;
  icon: "colors" | "size" | "alphabetics";
}

const FilterButton = ({ active, icon }: FilterButtonProps) => {

  const [actived, setActived ] = useState(active)

  return (
    <Container active={actived} onClick={() => setActived(!actived)}>
      { icon === "size" ? 
        <FilterSizes /> :
        icon === "alphabetics" ?
        <FilterAlphabetic /> :
        <FilterColors />
      }
      
    </Container>
  );
};

export default FilterButton;
