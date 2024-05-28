import React, { useState } from 'react';
import ProgressBar from './components/progreass';
import './App.css';

function App() {
  const [percentage, setPercentage] = useState(0);

  const handleChange = (e) => {
    const value = Math.max(0, Math.min(100, Number(e.target.value)));
    setPercentage(value);
  };

  return (
    <div className="App">
      <h1>Progress Bar</h1>
      <input
        type="number"
        value={percentage}
        onChange={handleChange}
        max="100"
        min="0"
        step="1"
      />
      <ProgressBar percentage={percentage} />
    </div>
  );
}

export default App;
