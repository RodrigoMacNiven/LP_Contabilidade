import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { SlSocialFacebook } from 'react-icons/sl';
import { FiLinkedin , FiYoutube } from "react-icons/fi";
import styles from './CSS/Rodape.module.css';

function Rodape() {
  return (
    <div class={styles.container}>
        <img src='' alt='ERRO-LOGO NÂO CARREGADA'></img>
          <div class={styles.redesociais}>
            <a href='https://www.instagram.com/'><FaInstagram /></a>
            <a href='https://pt-br.facebook.com/'><SlSocialFacebook /></a>
            <a href='https://www.linkedin.com/'><FiLinkedin /></a>
            <a href='https://www.youtube.com/'><FiYoutube /></a>
          </div>
        <p>Ouvidoria: site@site.com.br</p>
        <br/>
        <br/>
        <p>Avenida Paulista, XXX, Bela Vista, São Paulo XXXXX-XXX | Edifício XXXXX </p>
        <p>2023</p> 
        <p>CRC XX-000000/0</p> 
        <p>EMPRESA LTDA</p> 
        <p>XX.XXX.XXX/000X-XX</p> 
    </div>
  );
}

export default Rodape;