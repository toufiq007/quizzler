import { Link } from "react-router-dom";
import LogoIcon from "../../assets/logo.svg";
const Header = () => {
  return (
    <>
      <header className="flex justify-between items-center mb-12">
        <img src={LogoIcon} />
        <div>
          <Link to="/login" className="px-4 py-2 rounded hover:bg-primary hover:text-white transition-colors">
            Login
          </Link>

          <button className="px-4 py-2 rounded hover:bg-primary hover:text-white transition-colors">
            Logout
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
