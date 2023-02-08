import React from 'react';
import { btnWrapCss, btnCss } from './BasicButton.style';

export interface BasicButtonProps {
  label: string;
  onClick: any;
}

const BasicButton = ({ label, onClick }: BasicButtonProps) => {
  return (
    <div css={btnWrapCss}>
      <button onClick={onClick} css={btnCss}>
        {label}
      </button>
    </div>
  );
};

export default BasicButton;
