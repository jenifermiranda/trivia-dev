import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
// import Game from './pages/Game';
import GameCopy from './pages/GameCopy';
import Login from './pages/Login';
import UserResults from './pages/UserResults';

function App() {
  useEffect(() => {
    document.title = 'Trivia DEV';
  }, []);

  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="/game" element={ <GameCopy /> } />
      <Route path="/results" element={ <UserResults /> } />
    </Routes>
  );
}

export default App;
