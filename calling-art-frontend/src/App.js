import "./styles/ScrollBar.css";
import { Routes, Route, HashRouter } from "react-router-dom";
import Home from "./pages/Home";
import Image from "./pages/Image";
import ImageForm from "./pages/ImageForm";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import User from "./pages/User";
import Error404 from "./pages/Error404";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <>
      <HashRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/image" element={<Image />} />
            <Route path="/imageup" element={<ImageForm />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/user" element={<User />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </AuthProvider>
      </HashRouter>
    </>
  );
}

export default App;
