import { Link, useNavigate } from "react-router-dom";
import LogoIcon from "../../assets/logo.svg";
import { useAuth } from "../../hooks/useAuth";
const Header = () => {
  const { setAuth, auth } = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    setAuth({});
    navigate("/login");
  };
  return (
    <>
      <header className="flex justify-between items-center mb-12">
        <img src={LogoIcon} />
        <div>
          {auth?.user ? (
            <button
              onClick={handleLogout}
              className="px-4 py-2 rounded hover:bg-primary hover:text-white transition-colors"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="px-4 py-2 rounded hover:bg-primary hover:text-white transition-colors"
            >
              Login
            </Link>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
