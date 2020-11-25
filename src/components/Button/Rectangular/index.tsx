import React from 'react';
import { TButton } from '../../../types';
import './styles.css';

const Rectangular = ({ onClick, children }: TButton): JSX.Element => (
  <button type="button" className="rectangularButton" onClick={onClick}>
    {children}
  </button>
);

export default Rectangular;
