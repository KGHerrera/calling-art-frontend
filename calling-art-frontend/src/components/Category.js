import "../styles/Category.css";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { useContext } from "react";

export default function Category() {
  const { user } = useContext(AuthContext);

  return (
    <div className="category-conteiner">
      <div className="category-title">Select category</div>
      <div className="category-button-conteiner">
        {user ? (
          <Link to="/imageup">
            <button className="upload-image-button">upload image</button>
          </Link>
        ) : (
          <Link to="/login">
            <button className="upload-image-button">upload image</button>
          </Link>
        )}

        <button className="category-button">anime</button>
        <button className="category-button">video games</button>
        <button className="category-button">music</button>
        <button className="category-button">cartoon</button>
      </div>
    </div>
  );
}
