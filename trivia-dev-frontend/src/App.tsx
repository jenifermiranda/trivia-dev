import React, { useEffect } from 'react';
import Game from './pages/Game';

const App: React.FC = () => {
  useEffect(() => {
    document.title = 'Trivia DEV';
  }, []);

  return (
    <div>
      <Game />
    </div>
  );
};

export default App;
