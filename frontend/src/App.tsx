import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import UserResults from './pages/UserResults';
import GlobalProvider from './context/GlobalProvider';
import Game from './pages/Game';

function App() {
  useEffect(() => {
    document.title = 'Trivia DEV';
  }, []);

  return (
    <GlobalProvider>
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/game" element={ <Game /> } />
        <Route path="/results" element={ <UserResults /> } />
      </Routes>
    </GlobalProvider>
  );
}

export default App;
