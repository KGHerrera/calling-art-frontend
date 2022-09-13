import { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import CrudContext from "../context/CrudContext";
import "../styles/ImageDetail.css";
import Content from "./Content";

export default function ImageDetail() {
  const { id } = useParams();
  const { getImage, image, userProfile } = useContext(CrudContext);

  useEffect(() => {
    window.scroll({
      top: 0,
    });
    getImage("images/images/", id, true);
    
  }, [id]);

  return (
    <>
      <div className="image-detail-content-conteiner">
        {image && (
          <div className="image-detail-conteiner">
            <div className="image-detail-data">
              <img className="large-image" src={image.link} />
              <div className="image-detail">
                <div>
                  <h1 className="image-title">{image.title}</h1>
                  <p className="image-description">{image.description}</p>
                </div>

                {userProfile && (
                  <Link
                    to={`/user/${userProfile.id}`}
                    className="user-conteiner"
                  >
                    <div
                      className="user-profile"
                      style={{ backgroundImage: `url('${userProfile.icon}')` }}
                    ></div>

                    <h2 className="user-name">{userProfile.username}</h2>
                  </Link>
                )}
              </div>
            </div>

            <h2 className="related-images">related images</h2>
          </div>
        )}
      </div>
      {userProfile && <Content data={userProfile.images} />}
    </>
  );
}
