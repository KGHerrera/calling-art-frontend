import FooterForm from "./FooterForm";
import "../styles/SignUpForm.css";
import { useState } from "react";
import { helpHttp } from "../helpers/helpHttp";

const initialForm = {
  username: "",
  password: "",
  email: "",
  description: "",
  icon: "",
};

export default function SignUpForm() {
  const [form, setForm] = useState(initialForm);
  const [cPassword, setCPassword] = useState("");
  let api = helpHttp();

  const endpoint = "https://callingartbackend.herokuapp.com/accounts/register/";

  const handleReset = (e) => {
    setForm(initialForm);
    setCPassword("");
  };

  const createData = (data) => {
    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };
    api.post(endpoint, options).then((res) => {
      console.log(res);
      handleReset();
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.username ||
      !form.password ||
      !form.email ||
      !form.description ||
      !form.icon ||
      !cPassword
    ) {
      alert("faltan datos");
      return;
    }

    if (form.password !== cPassword) {
      alert("password no sirve");
      return;
    }

    createData(form);
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeCPassword = (e) => {
    setCPassword(e.target.value);
  };

  return (
    <div className="form-conteiner">
      <div className="sign-conteiner">
        <form className="form" onSubmit={handleSubmit}>
          <h1 className="form-title">type your data</h1>
          <input
            type="text"
            placeholder="username"
            className="input-form"
            name="username"
            onChange={handleChange}
            value={form.username}
          />
          <input
            type="text"
            placeholder="e-mail"
            className="input-form"
            name="email"
            onChange={handleChange}
            value={form.email}
          />
          <input
            type="text"
            placeholder="url-icon"
            className="input-form"
            name="icon"
            onChange={handleChange}
            value={form.icon}
          />
          <textarea
            rows="3"
            cols="20"
            className="textarea-form"
            placeholder="description"
            name="description"
            onChange={handleChange}
            value={form.description}
          />
          <input
            type="password"
            placeholder="password"
            className="input-form"
            name="password"
            onChange={handleChange}
            value={form.password}
          />
          <input
            type="password"
            placeholder="confirm-password"
            className="input-form"
            name="cPassword"
            onChange={handleChangeCPassword}
            value={cPassword}
          />
          <nav>
            <input type="submit" value="sign up" className="button-form" />
            <input
              type="reset"
              value="reset"
              className="button-form"
              onClick={handleReset}
            />
          </nav>
        </form>
      </div>

      <div className="user-preview">
        <h1 className="title-preview">preview</h1>
        <div
          className="image-preview"
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundImage: `url('${form.icon}')`,
          }}
        ></div>
        <h2 className="username-preview">{form.username}</h2>
      </div>

      <FooterForm url={"/login"} message={"do you have an account?, login"} />
    </div>
  );
}
