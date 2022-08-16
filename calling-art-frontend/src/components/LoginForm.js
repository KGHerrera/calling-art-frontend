import { useContext} from "react";
import { FiUser } from "react-icons/fi";
import AuthContext from "../context/AuthContext";
import "../styles/LoginForm.css";
import FooterForm from "./FooterForm";

export default function LoginForm() {
  let { loginUser } = useContext(AuthContext);

  return (
    <div className="form-conteiner-in">
      <div className="login-conteiner-in">
        <h1 className="form-title-in">welcome to calling-art</h1>
        <FiUser className="icon-login-in" />
        <form className="form-in" onSubmit={loginUser}>
          <input
            type="text"
            placeholder="username"
            name="username"
            className="input-form-in"
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            className="input-form-in"
          />
          <input type="submit" value="login" className="button-form-in" />
        </form>
      </div>

      <FooterForm
        url={"/signup"}
        message={"don't you have an account?, sign up"}
      />
    </div>
  );
}
