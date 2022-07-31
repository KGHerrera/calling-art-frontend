import React from "react";
import Content from "../components/Content";
import Footer from "../components/Footer";
import UserProfile from "../components/UserProfile";

export default function User() {
  return (
    <>
      <UserProfile />
      <Content />
      <Footer/>
    </>
  );
}
