import React from 'react';
import styles from './CSS/QuemSomos.module.css';

import img1 from '../imagens/declaracoes.svg';
import img2 from '../imagens/impostos.svg';
import img3 from '../imagens/empresas.svg';
import img4 from '../imagens/equipe.svg';


function QuemSomos() {
  return (
    <div class={styles.container}>
        <div class={styles.divsuperior}>
            <div class={styles.minicards}> 
                <img src={img1} alt='ERROR'></img>
                <p>+ de 1000 declarações <br/> enviadas!</p>
            </div>
            <div class={styles.minicards}> 
                <img src={img2} alt='ERROR'></img>
                <p>+ de 1000 impostos<br/> descomplicados!</p>
            </div>
            <div class={styles.minicards}> 
                <img src={img3} alt='ERROR'></img>
                <p>+ de 1000 empresas<br/> atendidas!</p>
            </div>
        </div>
        <div class={styles.divinferior}>
            <div class={styles.textoquemsomos}>
                <h2>QUEM SOMOS:</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consequat enim vel justo vulputate lacinia. Nam sed sapien posuere, 
                    condimentum elit vitae, luctus risus. Suspendisse condimentum est a sem finibus tristique a ut nisi. Quisque gravida ipsum bibendum, 
                    volutpat lacus vitae, pulvinar neque. Praesent finibus hendrerit sem, nec tincidunt diam vehicula et. Donec tempus, nulla et dignissim blandit, 
                    nisl velit tempor eros, eget maximus elit libero a massa. Aenean pretium est ut nulla porta rhoncus. Maecenas eget euismod felis. Aliquam nisi lorem, 
                    pharetra quis quam ac, viverra commodo libero. Quisque sit amet iaculis lectus.</p>
            </div>
            <div class={styles.fotoequipe}>
                <img src={img4} alt='ERROR'></img>
            </div>
        </div>
    </div>
  );
}

export default QuemSomos;