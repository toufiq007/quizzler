import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/pages/Login";
import RegisterPage from "./components/pages/Register";
import HomePage from "./components/pages/HomePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoutes from "./routes/PrivateRoutes";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route element={<PrivateRoutes />}>
          {/*  these our protected routes */}
          <Route path="/quiz-page" element={<div>this is the quiz page</div>} />
        </Route>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </>
  );
}

export default App;
