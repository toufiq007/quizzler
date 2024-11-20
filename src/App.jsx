import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/pages/Login";
import RegisterPage from "./components/pages/Register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<div>home page</div>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </>
  );
}

export default App;
