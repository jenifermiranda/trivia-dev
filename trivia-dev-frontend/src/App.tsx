import React, { useEffect } from 'react';
import Game from './pages/Game';
import Login from './pages/Login';

const App: React.FC = () => {
  useEffect(() => {
    document.title = 'Trivia DEV';
  }, []);

  return (
    <div>
      <Game />
      {/* Conteúdo da sua aplicação */}
      <Login/>
    </div>
  );
};

export default App;
