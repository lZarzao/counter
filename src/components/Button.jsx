import React from 'react';
import '../stylesheets/Button.css'

function Button({ text, isClicking, click }) {
  return (
    <button
      className={ isClicking ? 'clicking-button' : 'restart-button' }
      onClick={click}>
      {text}
    </button>
  );
}

export default Button