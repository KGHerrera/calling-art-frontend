import FooterForm from "../components/FooterForm";
import "../styles/Error404.css"

export default function Error404() {
  return (
    <div className="error-conteiner">
      <h1 className="error-h1">Error 404</h1>
      <h2 className="error-h2">page not found</h2>
      <FooterForm url="/" message="go home"/>
    </div>
  );
}
