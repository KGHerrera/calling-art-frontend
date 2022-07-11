import { FiHome } from "react-icons/fi";
import '../styles/FooterForm.css';

export default function FooterForm( {url, message} ){
    return (
      <div className="footer-form-conteiner">
        <a href="#" className="home-footer">
          <FiHome />
        </a>
        <a href={url}>
          <p className="message-footer">{message}</p>{" "}
        </a>
      </div>
    );
}