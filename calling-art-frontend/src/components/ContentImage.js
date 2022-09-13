import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Content.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

export default function ContentImage({ image }) {
  const navigate = useNavigate();
  const handleClick = (e) => {
    navigate(`/image/${image.id}`);
  };
  return (
    <LazyLoadImage
      alt={image.description}
      effect="opacity"
      src={image.link}
      onClick={handleClick}
      className="image-conteiner"
    />
  );
}
