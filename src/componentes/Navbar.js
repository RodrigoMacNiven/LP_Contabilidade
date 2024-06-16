import React, { useState } from 'react';
import styles from './CSS/Navbar.module.css';
import logo from '../imagens/logo-editor.svg';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <img src={logo} alt='ERRO-LOGO NÃO CARREGADA' />
      </div>
      <div className={styles.menuContainer}>
        <button className={styles.menuToggle} onClick={toggleMenu}>
          ☰
        </button>
        <ul className={`${styles.ul} ${menuOpen ? styles.active : ''}`} id='menu'>
          <li>QUEM SOMOS</li>
          <li>SERVIÇOS</li>
          <li>PLANOS</li>
          <li>CONTATO</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;