import FooterForm from "./FooterForm";
import '../styles/SignUpForm.css';

export default function SignUpForm() {
  return (
    <div className="form-conteiner">
      <div className="sign-conteiner">
        <form className="form">
          <h1 className="form-title">type your data</h1>
          <input type="text" placeholder="username" className="input-form" />
          <input type="text" placeholder="e-mail" className="input-form" />
          <input type="text" placeholder="url-icon" className="input-form" />
          <textarea
            name="textarea"
            rows="3"
            cols="20"
            className="textarea-form"
            placeholder="description"
          />
          <input
            type="password"
            placeholder="password"
            className="input-form"
          />
          <input
            type="password"
            placeholder="confirm-password"
            className="input-form"
          />

          <input type="submit" value="sign up" className="button-form" />
        </form>
      </div>

      <div className="user-preview">
        <h1 className="title-preview">preview</h1>
        <div className="image-preview"></div>
        <h2 className="username-preview">username</h2>
      </div>

      <FooterForm url={"#"} message={"do you have an account?, login"} />
    </div>
  );
}
