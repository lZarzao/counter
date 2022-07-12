import React from 'react';

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