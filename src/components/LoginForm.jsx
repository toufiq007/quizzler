import { useForm } from "react-hook-form";
import FieldInput from "./common/Field";
import { useAuth } from "../hooks/useAuth";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LoginForm = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = async (formData) => {
    console.log(formData);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/auth/login`,
        formData
      );
      if (response.status === 200) {
        toast.success("login successfull!!", {
          position: "top-right",
          autoClose: 3000,
        });
        const { user, tokens } = response.data.data;
        // set credentials to the authContext
        setAuth({
          user,
          authToken: tokens?.accessToken,
          refreshToken: tokens?.refreshToken,
        });
        navigate("/");
      }
    } catch (err) {
      toast.error("login failed!!", {
        position: "top-right",
        autoClose: 3000,
      });
      console.log(err);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <FieldInput
            id="email"
            name="email"
            type="email"
            label="Enter your username or email address"
            register={register}
            placeholder="Enter your email"
            validation={{
              required: "Email is required",
            }}
          />
          {errors && errors.email && (
            <p className="text-red-500">{errors?.email?.message}</p>
          )}
        </div>
        <div className="mb-6">
          <FieldInput
            id="password"
            name="password"
            type="password"
            label="Enter your Password"
            placeholder="enter password"
            register={register}
            validation={{
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long",
              },
            }}
          />
          {errors && errors.password && (
            <p className="text-red-500">{errors?.password?.message}</p>
          )}
        </div>
        <div className="mb-6 flex gap-2 items-center">
          <input
            type="checkbox"
            id="admin"
            {...register("admin")}
            className="px-4 py-3 rounded-lg border border-gray-300"
          />
          <label htmlFor="admin" className="block ">
            Login as Admin
          </label>
        </div>
        <button
          type="submit"
          className="w-full bg-primary text-white py-3 rounded-lg mb-4"
        >
          Sign in
        </button>
      </form>
    </>
  );
};

export default LoginForm;
