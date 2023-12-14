// Tela de Login
import { useState } from 'react';

function Login() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    // handleChange = ({ target }) => {
    //     const { name, value } = target;
    //     this.setState({
    //       [name]: value,
    //     }, this.inputValidation);
    // };

    return (
        <form>
          <div>
            Login
            <br />
            <br />
            <label>
              Nome:
              <input
                id="userName"
                type="text"
                // onChange={ setName }
                // value={ userName }
                name="userName"
                required
              />
            </label>
            <br />
            <br />
            <label>
              E-mail:
              <input
                id="email"
                type="email"
                // onChange={ this.handleChange }
                // value={ email }
                name="email"
                required
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