import NavBar from "./components/NavBar.js";
import Footer from "./components/Footer.js";
import './styles/ScrollBar.css';
import "./App.css"

function App() {
  return (
    <>
    <NavBar />
    <div className="content"></div>
    <Footer />
    </>
  );
}

export default App;
