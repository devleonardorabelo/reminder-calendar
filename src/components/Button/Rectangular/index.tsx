import React from 'react';
import { TButton } from '../../../types';
import './styles.css';

const Rectangular = ({ onClick, title, disabled }: TButton): JSX.Element => (
  <button
    type="button"
    className={`rectangularButton ${disabled && 'disabled'}`}
    onClick={onClick}
    disabled={disabled}
  >
    {title}
  </button>
);

export default Rectangular;
