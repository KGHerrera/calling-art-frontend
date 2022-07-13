import ImageDetail from "./components/ImageDetail.js";
import Footer from "./components/Footer.js";
import Content from "./components/Content.js";
import NavBar from "./components/NavBar.js";

import "./styles/ScrollBar.css";

function App() {
  return (
    <>
      <NavBar />
      <ImageDetail />
      <Content />
      <Footer />
    </>
  );
}

export default App;
