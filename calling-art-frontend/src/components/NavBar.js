import "../styles/NavBar.css";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";

export default function NavBar(props) {
  return (
    <div className="navbar-conteiner">
      <Link to="/">
        <div className="logo-conteiner">
          <div className="circle-logo"></div>
          <p className="image-logo">L O G O</p>
        </div>
      </Link>
      <div className="search-conteiner">
        <form className="search-form">
          <input
            type="text"
            className="search-textfield"
            placeholder="search"
          />

          <button type="submit" className="btn-search">
            <AiOutlineSearch />
          </button>
        </form>
      </div>
      <div className="start-conteiner">
        <Link className="start-button" to="/login">
          Login
        </Link>
        <Link className="start-button" to="/signup">
          Sing-up
        </Link>
      </div>
    </div>
  );
}
