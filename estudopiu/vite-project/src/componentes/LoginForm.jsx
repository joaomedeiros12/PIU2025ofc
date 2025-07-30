import { useState } from 'react';

export default function LoginForm() {
  const [formData, setFormData] = useState({
    login: '',
    senha: '',
  });

  // Atualiza o estado conforme o usuário digita
  function handleChange(event) {
    const { name, value } = event.target;

    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  }

  // Envia os dados e evita recarregamento da página
  function handleSubmit(event) {
    event.preventDefault(); // evita o reload da página
    console.log('Login:', formData.login);
    console.log('Senha:', formData.senha);
  }

  return (
    <form onSubmit={handleSubmit} style={{ padding: '2rem' }}>
      <div>
        <label>
          Login:
          <input
            type="text"
            name="login"
            value={formData.login}
            onChange={handleChange}
            placeholder="Digite seu login"
            required
            style={{ marginLeft: '1rem' }}
          />
        </label>
      </div>

      <br />

      <div>
        <label>
          Senha:
          <input
            type="password"
            name="senha"
            value={formData.senha}
            onChange={handleChange}
            placeholder="Digite sua senha"
            required
            style={{ marginLeft: '1rem' }}
          />
        </label>
      </div>

      <br />

      <button type="submit">Entrar</button>
    </form>
  );
}
