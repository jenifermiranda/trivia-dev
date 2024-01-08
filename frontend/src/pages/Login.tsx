// Tela de Login
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GlobalContext from '../context/GlobalContext';
import '../styles/Login.css';

function Login() {
  const navigate = useNavigate();

  const { formLogin, setformLogin } = useContext(GlobalContext);

  const [warning, setWarning] = useState<string>('');
  const [warningName, setWarningName] = useState<string>('');
  const [warningEmail, setWarningEmail] = useState<string>('');

  function handleChange(
    event: React.ChangeEvent<
    HTMLInputElement
    >,
  ) {
    const { name, value } = event.target;
    setformLogin({
      ...formLogin,
      [name]: value,
    });
  }

  function emailRegexTest(input: string) {
    const regex = /[A-Za-z0-9]+@[A-Za-z0-9]+\.com/i;
    return regex.test(input);
  }

  function handleSubmit() {
    if (formLogin.name.length === 0 && formLogin.email.length === 0) {
      setWarning('Todos os campos devem ser preenchidos!');
      return;
    }
    if (formLogin.name.length < 3) {
      setWarningName('Favor inserir um nome com mais de 3 caracteres!');
      return;
    }
    if (!emailRegexTest(formLogin.email)) {
      setWarningEmail('Favor inserir um e-mail válido!');
      return;
    }
    navigate('/game');
  // setWarning('Login realizado com sucesso!'); -> Não faz sentido ter!
  // Não vai dar tempo de ler esse aviso! E é óbvio...
  }

  return (
    <div>
      <form>
        <div className="box-branco">
          <label htmlFor="name" className="box-name">
            <input
              id="name"
              name="name"
              value={ formLogin.name }
              onChange={ handleChange }
              placeholder="Qual é o seu nome?"
            />
            <br />
          </label>
          {(warningName && formLogin.name.length < 3) && <p>{warningName}</p>}
          {/* Renderiza o estado a partir de sua leitura contínua -> some o warning quando o usuário cumpre os requisitos do input */}
          <label htmlFor="email" className="box-email">
            <input
              id="email"
              name="email"
              value={ formLogin.email }
              onChange={ handleChange }
              placeholder="Qual é o seu e-mail?"
            />
          </label>
          {(warningEmail && !emailRegexTest(formLogin.email)) && <p>{warningEmail}</p>}
          <br />
          {(warning
            && formLogin.name.length === 0
            && formLogin.email.length === 0)
            && <p>{warning}</p>}
          <button
            className="btnPlay"
            id="btnPlay"
            type="button"
            name="btnPlay"
            onClick={ handleSubmit }
          >
            Play
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
