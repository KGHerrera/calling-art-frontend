import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CrudContext from "../context/CrudContext";
import "../styles/UserProfile.css";
import Content from "./Content";
import Loader from "./Loader";

export default function UserContent() {
  const { getUserProfile, userProfile } = useContext(CrudContext);

  const [loading, setLoading] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
    getUserProfile("users/users/", id);
  }, [id]);

  return userProfile ? (
    <>
      <div className="profile-conteiner">
        <div className="user-banner"></div>
        <div
          className="user-image"
          style={{ backgroundImage: `url('${userProfile.icon}')` }}
        ></div>
        <h1 className="user-name">{userProfile.username}</h1>
        <p className="user-description">{userProfile.description}</p>
        <h2 className="user-images">images uploaded</h2>
      </div>
      {loading ? <Loader /> : <Content data={userProfile.images} />}
    </>
  ) : (
    <></>
  );
}
