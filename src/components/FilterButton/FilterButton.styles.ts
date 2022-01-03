import styled from 'styled-components';

import FilterButton from '../../assets/filter_button.svg'
import FilterButtonActive from '../../assets/filter_button_active.svg'

type FilterButtonProps = {
  active: boolean
}

export const Container = styled.button<FilterButtonProps>`
  width: 4.0rem;
  height: 4.0rem;

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 5;

  margin: 6px;

  border: none;

  background-color: transparent;
  background-image: ${(props) => props.active ? `url(${FilterButtonActive})` : `url(${FilterButton})`};
  background-repeat: no-repeat;
`;
