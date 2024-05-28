import React from 'react';
import './ProgressBar.css';

const ProgressBar = ({ percentage }) => {
  const fillerStyles = {
    width: `${percentage}%`,
    backgroundColor: 'blue',
    height: '100%',
    borderRadius: 'inherit',
    textAlign: 'right',
    transition: 'width 0.2s ease-in-out',
  };

  return (
    <div className="progress-bar-container">
      <div style={fillerStyles}>
        <span className="progress-bar-label">{`${percentage}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
