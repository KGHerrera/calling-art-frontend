import "../styles/NavBar.css";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

export default function NavBar(props) {
  let { user, logoutUser } = useContext(AuthContext);

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
      {user ? (
        <div className="nav-user-info">
          <Link to="/user">
            <div
              className="nav-user-image"
              style={{ backgroundImage: `url('${user.icon}')` }}
            ></div>
          </Link>

          <p className="nav-username">{user.username}</p>

          <button onClick={logoutUser} className="logout-button">
            <FiLogOut />
          </button>
        </div>
      ) : (
        <div className="start-conteiner">
          <Link className="start-button" to="/login">
            Login
          </Link>
          <Link className="start-button" to="/signup">
            Sing-up
          </Link>
        </div>
      )}
    </div>
  );
}
