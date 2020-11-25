import React from 'react';
import { TButton } from '../../../types';
import './styles.css';

const Circular = ({ onClick, icon }: TButton): JSX.Element => (
  <button type="button" className="circularButton" onClick={onClick}>
    <p>{icon}</p>
  </button>
);

export default Circular;
