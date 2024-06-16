import React from 'react';
import styles from './CSS/Apresentacao.module.css';
import Formulario from './Formulario';

function Apresentacao() {
  return (
    <div class={styles.container}>
        <div>
            <Formulario/>
        </div>
        <div class={styles.missao}>
            <h2>GOSTARIAMOS DE LHE AJUDAR A FAZER A SUA CONTABILIDADE SEM COMPLICAÇÔES! NEM TUDO PRECISA SER TRABALHOSO! VEM COM A GENTE!</h2>
        </div>
    </div>
  );
}

export default Apresentacao;