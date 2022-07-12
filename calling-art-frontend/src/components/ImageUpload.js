import FooterForm from "./FooterForm";
import '../styles/ImageUpload.css';

export default function ImageUpload() {
  return (
    <div className="image-upload-conteiner">
      <div className="form-conteiner">
        <form className="form">
          <h1 className="form-title">upload your image</h1>
          <input type="text" placeholder="title" className="input-form" />

          <input type="text" placeholder="url-image" className="input-form" />
          <textarea name="textarea" rows="5" cols="30" className="textarea-form" placeholder="description"/>
          <input value="upload" type="submit" className="button-form"/>
        </form>

        <div className="preview-conteiner">
          <h2 className="preview-title">image preview</h2>
          <div className="image-preview"></div>
        </div>
      </div>
      <FooterForm />
    </div>
  );
}
