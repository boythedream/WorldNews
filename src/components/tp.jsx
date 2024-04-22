// TopLoadingBar.js
import React, { useState, useEffect } from 'react';
import './TopLoadingBar.css';

const TopLoadingBar = ({ loading }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let timer;
    if (loading) {
      timer = setInterval(() => {
        setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
      }, 500);
    } else {
      clearInterval(timer);
      setProgress(0);
    }

    return () => {
      clearInterval(timer);
    };
  }, [loading]);

  return loading ? (
    <div className="top-loading-bar-container">
      <div
        className="top-loading-bar"
        style={{ width: `${progress}%`, transition: 'width 0.5s ease-in-out' }}
      ></div>
    </div>
  ) : null;
};

export default TopLoadingBar;
