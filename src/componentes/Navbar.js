import React from 'react';
import styles from './CSS/Navbar.module.css';

function Navbar() {
  return (
    <div class={styles.container}>
      <div class={styles.inner}><img src='' alt='ERRO-LOGO NÂO CARREGADA'></img></div>
      <div class={styles.inner}>
        <ul class={styles.ul}>
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