import "../styles/ImageDetail.css";

export default function ImageDetail() {
  return (
    <>
      <div className="image-detail-conteiner">
        <div className="large-image"></div>
        <div className="image-detail">
          <div>
            <h1 className="image-title">image title</h1>
            <p className="image-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi
            </p>
          </div>
          <div className="user-conteiner">
            <div className="user-profile"></div>
            <h2 className="user-name">username</h2>
          </div>
        </div>
      </div>
      <h2 className="related-images">related images</h2>
    </>
  );
}
