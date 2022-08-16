import "../styles/Content.css";
import ContentImage from "./ContentImage";

export default function Content({ data }) {
  return (
    <div className="content-conteiner">
      {data ? (
        data.map((image,index) => <ContentImage image={image} key={index}/>)
      ) : (
        <p>dont have images</p>
      )}
    </div>
  );
}
