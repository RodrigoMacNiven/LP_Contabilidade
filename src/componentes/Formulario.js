import React, { useState } from 'react';
import styles from './CSS/Formulario.module.css';

function Formulario() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //lógica para enviar os dados do formulário
    console.log(formData);
  };

  return (
    <div className={styles.formcontainer}>
      <form onSubmit={handleSubmit}>
        <h3>ENTRE EM CONTATO:</h3>
        <input
          type="text"
          id="name"
          name="name"
          placeholder='Nome'
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          placeholder='E-mail:'
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          placeholder='Telefone:'
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <textarea
          placeholder='Assunto:'
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          required
        ></textarea>

        <button type="submit">ENVIAR</button>
      </form>
    </div>
  );
}

export default Formulario;