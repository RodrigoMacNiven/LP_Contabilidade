import React from 'react';
import styles from './CSS/Servicos.module.css';
import sinaldesim from '../imagens/sinaldecorreto.svg';
import sinaldenao from '../imagens/sinaldenao.svg';

function Servicos() {
  return (
    <div class={styles.container}>
      <div>
        <h3>NOSSOS PLANOS:</h3>
      </div>
      <div class={styles.divmeio}>
        <div> {/*coluna1 */}
          <div class={styles.divvazia}></div>
          <div class={styles.divlinhaserv}>Serviço A</div>
          <div class={styles.divlinhaserv}>Serviço B</div>
          <div class={styles.divlinhaserv}>Serviço C</div>
          <div class={styles.divlinhaserv}>Serviço D</div>
          <div class={styles.divlinhaserv}>Serviço E</div>
          <div class={styles.divlinhaserv}>Serviço F</div>
        </div> 
        <div class={styles.divcoluna}> {/*coluna2 */}
          <div class={styles.divcabecalho}> {/* cabeçalho coluna2 */}
            <h4>PLANO BRONZE</h4>
            <p>a partir de</p>
            <h5>R$XXX,XX/mês</h5>
          </div>
          <div class={styles.divlinha}><img src={sinaldesim} alt='ERROR'></img></div>
          <div class={styles.divlinha}><img src={sinaldesim} alt='ERROR'></img></div>
          <div class={styles.divlinha}><img src={sinaldenao} alt='ERROR'></img></div>
          <div class={styles.divlinha}><img src={sinaldenao} alt='ERROR'></img></div>
          <div class={styles.divlinha}><img src={sinaldenao} alt='ERROR'></img></div>
          <div class={styles.divlinhafinal}><img src={sinaldenao} alt='ERROR'></img></div>
        </div>
        <div class={styles.divcoluna}> {/*coluna3 */}
          <div class={styles.divcabecalho}> {/* cabeçalho coluna3 */}
            <h4>PLANO PRATA</h4>
            <p>a partir de</p>
            <h5>R$XXX,XX/mês</h5>
          </div>
          <div class={styles.divlinha}><img src={sinaldesim} alt='ERROR'></img></div>
          <div class={styles.divlinha}><img src={sinaldesim} alt='ERROR'></img></div>
          <div class={styles.divlinha}><img src={sinaldesim} alt='ERROR'></img></div>
          <div class={styles.divlinha}><img src={sinaldenao} alt='ERROR'></img></div>
          <div class={styles.divlinha}><img src={sinaldenao} alt='ERROR'></img></div>
          <div class={styles.divlinhafinal}><img src={sinaldenao} alt='ERROR'></img></div>
        </div> 
        <div class={styles.divcoluna}> {/*coluna4 */}
          <div class={styles.divcabecalho}> {/* cabeçalho coluna4 */}
            <h4>PLANO OURO</h4>
            <p>a partir de</p>
            <h5>R$XXX,XX/mês</h5>
          </div>
          <div class={styles.divlinha}><img src={sinaldesim} alt='ERROR'></img></div>
          <div class={styles.divlinha}><img src={sinaldesim} alt='ERROR'></img></div>
          <div class={styles.divlinha}><img src={sinaldesim} alt='ERROR'></img></div>
          <div class={styles.divlinha}><img src={sinaldesim} alt='ERROR'></img></div>
          <div class={styles.divlinha}><img src={sinaldesim} alt='ERROR'></img></div>
          <div class={styles.divlinhafinal}><img src={sinaldesim} alt='ERROR'></img></div>
        </div>
      </div>  
      <div class={styles.divinferior}>
        <p>Já escolheu seu plano ou deseja saber sobre nossos planos personalizados?</p>
        <button>ENTRE EM CONTATO</button>
      </div>
    </div>
  );
}

export default Servicos;