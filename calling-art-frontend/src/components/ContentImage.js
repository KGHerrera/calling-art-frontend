import React from 'react'
import "../styles/Content.css"

export default function ContentImage({image}) {
  return <div className="image-conteiner" style={{backgroundImage: `url('${image.link}')`}}></div>;
}
