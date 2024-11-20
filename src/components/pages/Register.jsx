import AuthBanner from "../common/AuthBanner";
import LogoIcon from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import RegistrationForm from "../RegisterForm";
const RegisterPage = () => {
  return (
    <div className="flex min-h-screen">
      <AuthBanner title="Sign up" />

      <div className="w-full lg:w-1/2 flex items-center justify-center p-12">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold mb-8 flex gap-2 items-center">
            <span>Welcome to</span>
            <img src={LogoIcon} className="h-7" />
          </h2>
          <h1 className="text-5xl font-bold mb-8">Sign up</h1>

          <RegistrationForm />

          <div className="mt-2 text-gray-400">
            <p className="text-center">
              Already have account ?
              <Link to="/login" className="text-primary">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
