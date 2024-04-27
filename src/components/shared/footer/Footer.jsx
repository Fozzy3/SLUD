import styles from '@/components/shared/footer/footer.module.css';

const Footer = () => {
  return (
    
    <footer id="footer" className={`${styles.footer}`}>

      <div id="container_footer" className={`${styles.container_footer}`}>

        <div id="upper_part_footer" className={`${styles.footer_up}`}>
          <img 
            src={"./logo_ud.png"} 
            alt={"logo de la universidad distrital"}
          />
          <div id="text_footer_up" className={`${styles.top}`}>
            <h3>
              UNIVERSIDAD DISTRITAL
              FRANCISCO JOSÉ DE CALDAS
            </h3>
            <h2>
              Acreditación institucional de alta calidad
            </h2>
          </div>
        </div>

        <div id="footer_row" className={`${styles.footer_row}`}>

          <div id="nosotros" className={`${styles.footer_links}`}>

            <h4>Grupo</h4>
            <ul id="lista_grupo" className={`${styles.listas}`}>

              <li><a href="#">We</a></li>
              <li><a href="#">Historia</a></li>
              <li><a href="#">Tema</a></li>
              <li><a href="#">Tematica</a></li>

            </ul>

          </div>

          <div id="posicion" className={`${styles.footer_links}`}>

            <h4>Donde Encontrarnos</h4>

            <a href="https://www.google.com/maps/place/Universidad+Distrital+Calle+40/@4.627963,-74.065937,21z/data=!4m6!3m5!1s0x8e3f9a286d7ef055:0x9cee6f53b8b5f090!8m2!3d4.6279572!4d-74.0659162!16s%2Fg%2F11bw4q7_lt?hl=es&entry=ttu"
            target="_blank">
              <img src="./ubicacion.png" alt="enlace a nuestra ubicacion"/>
            </a>
          </div>


          <div id="siguenos" className={`${styles.footer_links}`}>

            <h4>Síguenos</h4>
            <div className={`${styles.social_links}`}>

              <a href="https://www.facebook.com/GrupoLinuxUD/?locale=es_LA"><i id="f-facebook" className="fab fa-facebook" alt="Icono de facebook"></i></a>
              <a href="https://glud.udistrital.edu.co"><i id="f-instagram" className="fab fa-instagram" alt="Icono de instagram"></i></a>
              <a href="https://slud.udistrital.edu.co"><i id="f-twitter" className="fab fa-twitter" alt="Icono de twitter"></i></a>
              <a href="#"><i id="f-linkedin" className="fab fa-linkedin" alt="Icono de linkedin"></i></a>
              <a href="#"><i id="f-youtube" className="fab fa-youtube" alt="Icono de youtube"></i></a>

            </div>

          </div>

        </div>


        <div id="destino_final" className={`${styles.foondo}`}>
          <p>Copyright &copy; <script>document.write(new Date().getFullYear());</script>. GLUD</p>
        </div>
      </div>

    </footer>

  );
}

export default Footer;
