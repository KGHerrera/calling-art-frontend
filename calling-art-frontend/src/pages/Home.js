import React from "react";
import Content from "../components/Content";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Category from "../components/Category";


export default function Home() {
  return (
    <>
      <NavBar />
      <Category/>
      <Content data={[]}/>
      <Footer />
    </>
  );
}
