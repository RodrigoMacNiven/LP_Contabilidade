import React from 'react';
import styles from './CSS/NossosServicos.module.css';
import Cardservico from './Cardservico';

function NossosServicos() {
  return (
    <div class={styles.container}>
        <h3 class={styles.containertitulo}>NOSSOS SERVIÇOS:</h3>
        <div class={styles.containercards}>
            <Cardservico/>
            <Cardservico/>
            <Cardservico/>
        </div>
    </div>
  );
}

export default NossosServicos;