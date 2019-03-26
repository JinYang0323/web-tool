import React from 'react';

const LockButton = ({ number, className, onClick }) => {
  className = className ? `${className} lock-button` : `lock-button`;

  return (
    <div>
      <button onClick={() => onClick(number)} className={className}>
        {number}
      </button>
    </div>
  );
};

export default LockButton;
