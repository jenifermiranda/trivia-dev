import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
// import Game from './pages/Game';
import GameCopy from './pages/GameCopy';
import Login from './pages/Login';

function App() {
  useEffect(() => {
    document.title = 'Trivia DEV';
  }, []);

  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="/game" element={ <GameCopy /> } />
    </Routes>
  );
}

export default App;
