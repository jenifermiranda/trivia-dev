import { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';
import '../styles/Header.css';

function Header() {
  const { userScore, formLogin } = useContext(GlobalContext);

  return (
    <header className="all-header-page">
      <h1>{formLogin.name}</h1>
      <div className="score">
        <img
          src="/src/images/score.png"
          alt="score"
          className="score-img"
          width={ 50 }
          height={ 50 }
        />
        <h1>
          Score:
          {' '}
          {userScore}
        </h1>
      </div>
    </header>
  );
}

export default Header;
