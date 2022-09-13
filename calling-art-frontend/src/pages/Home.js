import React, { useContext, useEffect } from "react";
import Content from "../components/Content";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Category from "../components/Category";
import CrudContext from "../context/CrudContext";

export default function Home() {
  const { images, getImages, next } = useContext(CrudContext);

  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });

    if (images.length === 0) getImages("images/images/", false);
  }, []);

  const handleLoadMore = (e) => {
    getImages(next, true);
  };

  return (
    <>
      <NavBar showSearch={true} />
      <Category />
      <Content data={images} handleLoadMore={handleLoadMore} btnLoad={true} />
      <Footer />
    </>
  );
}
