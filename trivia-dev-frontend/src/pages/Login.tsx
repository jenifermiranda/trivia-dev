// Tela de Login
import { useState } from 'react';

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

  return (
      <form>
        <div>
          Login
          <br />
          <br />
          <label>
            Nome:
            <input
              required
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
              required
              name="email"
              value={formLogin.email}
              onChange={handleChange}
            />
          </label>
          <br />
          <br />
          <button
            id="btnPlay"
            type="submit"
            name="btnPlay"
            // onClick={ this.handleSubmit }
            // disabled={ btn }
          >
            Play
          </button>
        </div>
      </form>
    );
}

export default Login;