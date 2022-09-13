import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { helpHttp } from "../helpers/helpHttp";

const CrudContext = createContext();

export const CrudProvider = ({ children }) => {
  let api = helpHttp();
  const url = "https://callingartbackend.herokuapp.com/";
  let navigate = useNavigate();

  const [image, setImage] = useState({});
  const [userProfile, setUserProfile] = useState({});
  const [images, setImages] = useState([]);
  const [next, setNext] = useState(null);

  /* ----------------------------------------
  POST METHODS
  ----------------------------------------  */

  const createDataRegister = (data, route) => {
    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };
    api.post(url + route, options).then((res) => {
      if (!res.err) navigate("/login");
    });
  };

  const createDataImage = (data, route, access) => {
    let options = {
      body: data,
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + access,
      },
    };
    api.post(url + route, options).then((res) => {
      if (res.err) alert("no uploaded");
    });
  };

  /* ----------------------------------------
  GET METHODS
  ----------------------------------------  */

  const getImage = (route, id, getUser = false) => {
    if(getUser) setUserProfile({});
    setImage({});
    let endpoint = `${url}${route}${id}`;
    api.get(endpoint).then((res) => {
      if (!res.err) {
        setImage(res);
        if (getUser) setUserProfile(getUserProfile("users/users/", res.user_id));
      } else {
        navigate("/error404");
      }
    });
  };

  const getUserProfile = (route, id) => {
    if (userProfile.id != id) setUserProfile({});

    let endpoint = `https://callingartbackend.herokuapp.com/${route}${id}`;
    api.get(endpoint).then((res) => {
      if (!res.err) {
        setUserProfile(res);
      } else {
        navigate("/error404");
      }
    });
  };

  const getImages = (route, loadMore = false) => {
    let endpoint = "";
    if (!loadMore) endpoint = url + route;
    else endpoint = route;

    api.get(endpoint).then((res) => {
      if (!res.err) {
        if (!loadMore) setImages(res.results);
        else setImages([...images, ...res.results]);
        setNext(res.next);
      }
    });
  };

  /* ----------------------------------------
  END
  ----------------------------------------  */

  let contextData = {
    createDataRegister,
    createDataImage,
    getImage,
    getUserProfile,
    getImages,
    images,
    image,
    userProfile,
    next,
  };

  return (
    <CrudContext.Provider value={contextData}>{children}</CrudContext.Provider>
  );
};

export default CrudContext;
