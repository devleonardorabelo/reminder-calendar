import React from 'react';
import { TButton } from '../../../types';
import './styles.css';

const Circular = ({
  onClick,
  children,
  transparent,
  disabled,
}: TButton): JSX.Element => (
  <button
    type="button"
    className={`circularButton ${transparent && 'transparent'} ${
      disabled && 'disabled'
    }`}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
);

export default Circular;
