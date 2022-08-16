import FooterForm from "./FooterForm";
import "../styles/ImageUpload.css";
import { useContext, useState } from "react";
import { helpHttp } from "../helpers/helpHttp";
import AuthContext from "../context/AuthContext";

const initialForm = {
  title: "",
  link: "",
  description: "",
  user: 0,
};

export default function ImageUpload() {
  const [form, setForm] = useState(initialForm);
  const { user, authTokens } = useContext(AuthContext);

  let api = helpHttp();

  const endpoint = "https://callingartbackend.herokuapp.com/images/images/";

  const createData = (data) => {
    let options = {
      body: data,
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + String(authTokens.access),
      },
    };
    api.post(endpoint, options).then((res) => {
      if (res.err) {
        console.log("error al subir");
      } else {
        handleReset();
      }
    });
  };

  const handleReset = () => setForm(initialForm);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.title || !form.description || !form.link) {
      //console.log("faltan");
      return;
    }
    form.user = user.user_id;

    createData(form);
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="image-upload-conteiner-iu">
      <div className="upload-conteiner-iu">
        <h1 className="form-title-iu">upload your image</h1>
        <form className="form-iu" onSubmit={handleSubmit}>
          <div className="form-image-iu">
            <div className="form-image-name-url-iu">
              <input
                type="text"
                value={form.title}
                placeholder="title"
                className="input-form-iu"
                onChange={handleChange}
                name="title"
              />

              <input
                type="text"
                placeholder="url-image"
                className="input-form-iu"
                onChange={handleChange}
                value={form.link}
                name="link"
              />
            </div>
            <textarea
              type="textarea"
              value={form.description}
              rows="3"
              cols="30"
              className="textarea-form-iu"
              placeholder="description"
              onChange={handleChange}
              name="description"
            />
          </div>

          <div className="check-box-ui">
            <input type="checkbox" id="anime" className="checkbox-input" />
            <label htmlFor="anime" className="label-iu">
              ANIME
            </label>
            <input type="checkbox" id="videogames" className="checkbox-input" />
            <label htmlFor="videogames" className="label-iu">
              VIDEOGAMES
            </label>
            <input type="checkbox" id="cartoons" className="checkbox-input" />
            <label htmlFor="cartoons" className="label-iu">
              CARTOONS
            </label>
            <input type="checkbox" id="music" className="checkbox-input" />
            <label htmlFor="music" className="label-iu">
              MUSIC
            </label>
          </div>
          <div
            className="image-preview-upload-iu"
            style={{ backgroundImage: `url('${form.link}')` }}
          ></div>
          <div className="inputs-iu">
            <input value="upload" type="submit" className="button-form-iu" />
            <input
              value="reset"
              type="reset"
              className="button-form-iu"
              onClick={handleReset}
            />
          </div>
        </form>

        {/* <div className="preview-conteiner">
          <h2 className="preview-title">image preview</h2>
          <div
            className="image-preview-upload"
            style={{ backgroundImage: `url('${form.link}')` }}
          ></div>
        </div> */}
      </div>
      <FooterForm url="/" />
    </div>
  );
}
