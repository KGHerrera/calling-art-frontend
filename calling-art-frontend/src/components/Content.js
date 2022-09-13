import { useContext } from "react";
import CrudContext from "../context/CrudContext";
import "../styles/Content.css";
import ContentImage from "./ContentImage";

export default function Content({ data, handleLoadMore, btnLoad = false }) {

  const {next} = useContext(CrudContext);

  return (
    <div className="content-conteiner">
      {data ? (
        data.map((image, index) => <ContentImage image={image} key={index} />)
      ) : (
        <></>
      )}

      {btnLoad && next && (
        <button className="load-more" onClick={handleLoadMore}>
          load more
        </button>
      )}
    </div>
  );
}
