import styles from '@/components/shared/footer/footer.module.css';
import { list } from 'postcss';

const Footer = () => {
  return (
    
    <footer id="footer" className={`${styles.footer}`}>

      <div id="container_footer" className={`${styles.container_footer}`}>

        <div id="upper_part_footer" className={`${styles.footer_up}`}>
          <img 
            src={"./logo_ud_blanco.png"} 
            alt={"escudo de la universidad distrital"}
          />
        </div>

        <div id="footer_row" className={`${styles.footer_row}`}>

          <div id="nosotros" className={`${styles.footer_links}`}>

            <h4>Grupo</h4>
            <ul id="lista_grupo" className={`${styles.listas}`}>

              <li><a href="https://glud.udistrital.edu.co/" target="_blank">We</a></li>
              <li><a href="https://www.youtube.com/watch?v=hGl7ShlXMd0" target="_blank">Historia</a></li>
              <li><a href="https://www.mistralbs.com/blog/analisis-y-ciencia-de-datos-origenes-e-historia/" target="_blank">Tema</a></li>
              <li><a href="https://gitlab.com/GLUD" target="_blank">Tematica</a></li>

            </ul>

          </div>

          <div id="posicion" className={`${styles.footer_links}`}>

            <h4>Donde Encontrarnos</h4>


            <div className={`${styles.social_links}`}>

              <a href="https://www.facebook.com/GrupoLinuxUD" target="_blank"><i id="f-facebook" className="fab fa-facebook" alt="Icono de facebook"></i></a>
              <a href="https://www.instagram.com/grupo_glud/" target="_blank"><i id="f-instagram" className="fab fa-instagram" alt="Icono de instagram"></i></a>
              <a href="https://twitter.com/GrupoGLUD" target="_blank"><i id="f-twitter" className="fab fa-twitter" alt="Icono de twitter"></i></a>
              <a href="https://www.linkedin.com/in/grupoglud/" target="_blank"><i id="f-linkedin" className="fab fa-linkedin" alt="Icono de linkedin"></i></a>
              <a href="https://www.youtube.com/c/GrupoLinuxUniversidadDistrital" target="_blank"><i id="f-youtube" className="fab fa-youtube" alt="Icono de youtube"></i></a>
              <a href="https://www.twitch.tv/grupoglud" target="_blank"><i id="f-twitch" className="fab fa-twitch" alt="Icono de twitch"></i></a>
              <a href="https://www.tiktok.com/@grupo_glud" target="_blank"><i id="f-tiktok" className="fab fa-tiktok" alt="Icono de tik tok"></i></a>

            </div>


            <a href="https://www.google.com/maps/place/Universidad+Distrital+Calle+40/@4.627963,-74.065937,21z/data=!4m6!3m5!1s0x8e3f9a286d7ef055:0x9cee6f53b8b5f090!8m2!3d4.6279572!4d-74.0659162!16s%2Fg%2F11bw4q7_lt?hl=es&entry=ttu"
            target="_blank">
              <img src="./ubicacion.png" alt="enlace a nuestra ubicacion"/>
            </a>


          </div>

          <div id="siguenos" className={`${styles.footer_links}`}>

            <h4>Trabajo</h4>
            <ul id="lista_grupo" className={`${styles.listas}`}>

              <li><a href="https://github.com/GLUD" target="_blank">Github</a></li>
              <li><a href="https://gitlab.com/GLUD" target="_blank">Gitlab</a></li>

            </ul>
          </div>

        </div>


        <div id="destino_final" className={`${styles.foondo}`}>
          <pre>GLUD UD      contacto:
            glud@udistrital.edu.co      Copyright &copy;
            2024</pre>
        </div>
      </div>

    </footer>

  );
}

export default Footer;
