import React from 'react';
import '../stylesheets/Counter.css';

function Counter({ num }) {
  return <section className='counter'>{num}</section>;
}

export default Counter;
