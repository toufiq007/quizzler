import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/pages/Login";
import RegisterPage from "./components/pages/Register";
import HomePage from "./components/pages/HomePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </>
  );
}

export default App;
