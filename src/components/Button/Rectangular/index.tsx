import React from 'react';
import { TButton } from '../../../types';
import './styles.css';

const Rectangular = ({ onClick, title }: TButton): JSX.Element => (
  <button type="button" className="rectangularButton" onClick={onClick}>
    <p>{title}</p>
  </button>
);

export default Rectangular;
