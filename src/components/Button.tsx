import React from 'react';

interface ButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

function Button({onClick}: ButtonProps) {
  return (
    <button onClick={onClick}>퀴즈 시작</button>
  )
}

export default Button