import "./Rodape.css";

const Rodape = () => {
  return (
    <footer className="footer">
      <section>
        <ul>
          <li>
            <a href="facebook.com" target="_blank">
              <img src="/Imagem/Rodape/fb.png" alt="" />
            </a>
          </li>
          <li>
            <a href="twitter.com" target="_blank">
              <img src="/Imagem/Rodape/tw.png" alt="" />
            </a>
          </li>
          <li>
            <a href="instagram.com" target="_blank">
              <img src="/Imagem/Rodape/ig.png" alt="" />
            </a>
          </li>
        </ul>
      </section>
      <section>
        <img src="/Imagem/Rodape/logo.png" alt="" />
      </section>
      <section>
        <p>Vamos Trabalhar Juntos!</p>
      </section>
    </footer>
  );
};

export default Rodape;
