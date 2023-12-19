// Tela de Login
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [formLogin, setformLogin] = useState({
    name: '',
    email: '',
  });

function handleChange(
  event: React.ChangeEvent<
    HTMLInputElement
  >
) {
  const { name, value } = event.target;
  setformLogin({
    ...formLogin,
    [name]: value,
  });
}

function emailRegexTest(input: string) {
  let regex = /[A-Za-z0-9]+@[A-Za-z0-9]+\.com/i;
  return regex.test(input);
}

function handleSubmit(
  event: React.FormEvent<HTMLFormElement>
) {
  event.preventDefault();
  if (formLogin.name.length === 0 && formLogin.email.length === 0) {
    alert('Todos os campos devem ser preenchidos!');
  }
  else if (formLogin.name.length < 3) {
    alert('Favor inserir um nome com mais de 3 caracteres!');
  }
  else if (!emailRegexTest(formLogin.email)) {
    alert('Favor inserir um e-mail válido!');
  }
  else {
    alert('Login realizado com sucesso!');

  }
}

return (
    <form onSubmit={handleSubmit}>
      <div>
        Login
        <br />
        <br />
        <label>
          Nome:
          <input
            name="name"
            value={formLogin.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label>
          E-mail:
          <input
            name="email"
            value={formLogin.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <Link to="/Game">
          <button
            id="btnPlay"
            type="submit"
            name="btnPlay"
          >
            Play
          </button>
        </Link>
      </div>
    </form>
  );
}

export default Login;