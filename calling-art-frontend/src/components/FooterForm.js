import { FiHome } from "react-icons/fi";
import '../styles/FooterForm.css';
import { Link } from "react-router-dom";

export default function FooterForm( {url, message} ){
    return (
      <div className="footer-form-conteiner">
        <Link to="/" className="home-footer">
          <FiHome />
        </Link>
        <Link to={url}>
          <p className="message-footer">{message}</p>{" "}
        </Link>
      </div>
    );
}