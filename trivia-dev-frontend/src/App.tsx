import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Game from './pages/Game';
import Login from './pages/Login';

const App: React.FC = () => {
  useEffect(() => {
    document.title = 'Trivia DEV';
  }, []);

  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="/game" element={ <Game /> } />
    </Routes>
  );
};

export default App;
