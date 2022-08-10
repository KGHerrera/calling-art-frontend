import '../styles/Category.css';
import { Link } from "react-router-dom";

export default function Category() {
  return (
    <div className="category-conteiner">
      <div className="category-title">Select category</div>
      <div className="category-button-conteiner">
        <Link to="/imageup">
          <button className="upload-image-button">upload image</button>
        </Link>
        <button className="category-button">anime</button>
        <button className="category-button">video games</button>
        <button className="category-button">music</button>
        <button className="category-button">cartoon</button>
      </div>
    </div>
  );
}
