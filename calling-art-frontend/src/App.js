import NavBar from "./components/NavBar.js";
import Footer from "./components/Footer.js";
import Content from "./components/Content.js";
import Category from "./components/Category.js";
import "./styles/ScrollBar.css";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <Category />
      <Content />
      <Footer />
    </>
  );
}

export default App;
