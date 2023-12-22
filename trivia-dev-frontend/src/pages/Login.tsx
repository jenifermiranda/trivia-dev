// Tela de Login
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const [formLogin, setformLogin] = useState({
    name: '',
    email: '',
  });

  const [warning, setWarning] = useState('');
  const [warningName, setWarningName] = useState('');
  const [warningEmail, setWarningEmail] = useState('');

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
    <form>
      <div>
        Login
        <br />
        <br />
        <label>
          Nome:
          <input
            name="name"
            value={ formLogin.name }
            onChange={ handleChange }
          />
        </label>
        {(warningName && formLogin.name.length < 3) && <p>{warningName}</p>}
        {/* Renderiza o estado a partir de sua leitura contínua -> some o warning quando o usuário cumpre os requisitos do input */}
        <br />
        <br />
        <label>
          E-mail:
          <input
            name="email"
            value={ formLogin.email }
            onChange={ handleChange }
          />
        </label>
        {(warningEmail && !emailRegexTest(formLogin.email)) && <p>{warningEmail}</p>}
        <br />
        <br />
        {(warning
          && formLogin.name.length === 0
          && formLogin.email.length === 0)
          && <p>{warning}</p>}
        <button
          id="btnPlay"
          type="button"
          name="btnPlay"
          onClick={ handleSubmit }
        >
          Play
        </button>
      </div>
    </form>
  );
}

export default Login;
