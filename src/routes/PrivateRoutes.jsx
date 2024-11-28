import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
const PrivateRoutes = () => {
  const { auth } = useAuth();
  return (
    <div>
      {auth?.user ? (
        <div className="container mx-auto py-3">
          <Header />
          <Outlet />
          <Footer />
      </div>
      ) : (
        <Navigate to="/login" />
      )}
    </div>
  );
};

export default PrivateRoutes;
