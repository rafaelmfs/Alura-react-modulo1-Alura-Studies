import React from 'react';
import style from './Button.module.scss';

interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

export function Button({ type = 'button', onClick, children }: ButtonProps) {
  return (
    <button type={type} className={style.button} onClick={onClick}>
      {children}
    </button>
  );
}
