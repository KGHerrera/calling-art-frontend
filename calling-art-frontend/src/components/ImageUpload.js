import FooterForm from "./FooterForm";
import "../styles/ImageUpload.css";
import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import CrudContext from "../context/CrudContext";

const initialForm = {
  title: "",
  link: "",
  description: "",
  user: 0,
};

const initialCategory = {
  ANIME: "",
  VIDEOGAMES: "",
  CARTOONS: "",
  MUSIC: "",
};

export default function ImageUpload() {
  const [form, setForm] = useState(initialForm);
  const { user, authTokens } = useContext(AuthContext);
  const { createDataImage } = useContext(CrudContext);
  const [category, setCategory] = useState(initialCategory);

  const handleReset = () => setForm(initialForm);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !category.ANIME &&
      !category.VIDEOGAMES &&
      !category.CARTOONS &&
      !category.MUSIC
    ) {
      console.log("no categorys")
      return;
    }

    if (!form.title || !form.description || !form.link) {
      //console.log("faltan");
      return;
    }

    
    form.user = user.user_id;

    createDataImage(form, "images/images/", String(authTokens.access));
    handleReset();
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelect = (e) => {
    if (e.target.checked) {
      setCategory({
        ...category,
        [e.target.name]: e.target.name,
      });
    } else {
      setCategory({
        ...category,
        [e.target.name]: "",
      });
    }
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
            <input
              type="checkbox"
              id="anime"
              className="checkbox-input"
              name="ANIME"
              onChange={handleSelect}
            />
            <label htmlFor="anime" className="label-iu">
              ANIME
            </label>
            <input
              type="checkbox"
              id="videogames"
              className="checkbox-input"
              name="VIDEOGAMES"
              onChange={handleSelect}
            />
            <label htmlFor="videogames" className="label-iu">
              VIDEOGAMES
            </label>
            <input
              type="checkbox"
              id="cartoons"
              className="checkbox-input"
              name="CARTOONS"
              onChange={handleSelect}
            />
            <label htmlFor="cartoons" className="label-iu">
              CARTOONS
            </label>
            <input
              type="checkbox"
              id="music"
              className="checkbox-input"
              name="MUSIC"
              onChange={handleSelect}
            />
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
