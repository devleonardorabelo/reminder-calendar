import React from 'react';
import { TButton } from '../../../types';
import './styles.css';

const Circular = ({ onClick, children }: TButton): JSX.Element => (
  <button type="button" className="circularButton" onClick={onClick}>
    {children}
  </button>
);

export default Circular;
