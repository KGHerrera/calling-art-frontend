import { FiUser } from "react-icons/fi";
import "../styles/LoginForm.css";

export default function LoginForm() {
  return (
    <div className="form-conteiner">
      <div className="login-conteiner">
        <h1 className="form-title">welcome to calling-art</h1>
        <FiUser className="icon-login" />
        <form className="form">
          <input type="text" 
          placeholder="username" 
          className="input-form" />
          <input
            type="password"
            placeholder="password"
            className="input-form"
          />
          <input type="submit" value="login" className="button-form"/>
        </form>
      </div>
    </div>
  );
}
