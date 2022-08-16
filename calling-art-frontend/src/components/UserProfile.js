import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import { helpHttp } from "../helpers/helpHttp";
import "../styles/UserProfile.css";
import Content from "./Content";
import Loader from "./Loader";

export default function UserContent() {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  let api = helpHttp();

  const [data, setData] = useState([]);

  const getData = (id) => {
    setLoading(true);
    let endpoint = `https://callingartbackend.herokuapp.com/users/users/${id}`;
    api.post(endpoint).then((res) => {
      if (!res.err) {
        setData(res.images);
      }

      setLoading(false);
    });
  };

  useEffect(() => {
    getData(user.user_id);
  }, []);

  return user ? (
    <>
      <div className="profile-conteiner">
        <div className="user-banner"></div>
        <div
          className="user-image"
          style={{ backgroundImage: `url('${user.icon}')` }}
        ></div>
        <h1 className="user-name">{user.name}</h1>
        <p className="user-description">{user.description}</p>
        <h2 className="user-images">{user.username}'s images</h2>
      </div>
      {loading ? <Loader /> : <Content data={data} />}
    </>
  ) : (
    <div className="profile-conteiner">
      <div className="user-banner"></div>
      <div className="user-image"></div>
      <h1 className="user-name">username</h1>
      <p className="user-description"></p>
      <h2 className="user-images">user's images</h2>
    </div>
  );
}
