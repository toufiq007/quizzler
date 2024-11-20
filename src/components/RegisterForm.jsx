import { useForm } from "react-hook-form";
import FieldInput from "./common/Field";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

const RegistrationForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();
  const onSubmit = async (formData) => {
    try {
      const payload = {
        full_name: formData.fullName,
        email: formData.email,
        password: formData.password,
        role: formData.admin ? "admin" : "user",
      };
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/auth/register`,
        payload
      );
      console.log(response);
      if (response.status === 201) {
        toast.success("Registration Succesfull", {
          position: "top-right",
          autoClose: 3000,
        });
        Navigate("/login");
      }
    } catch (err) {
      console.log(err);
      toast.error(`${err.message}`, {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  const password = watch("password");

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <FieldInput
            id="fullName"
            name="fullName"
            type="text"
            label="Full Name"
            register={register}
            placeholder="John Doe"
            validation={{
              required: "Fullname is required",
            }}
          />
          {errors && errors.fullName && (
            <p className="text-red-500">{errors?.fullName?.message}</p>
          )}
        </div>

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

        <div className="mb-6 flex gap-x-3">
          <div>
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

          <div>
            <FieldInput
              id="confirm_password"
              name="confirm_password"
              type="password"
              label="Confirm Password"
              placeholder="confirm password"
              register={register}
              validation={{
                required: "Please confirm your password",
                validate: (value) =>
                  value === password || "Passwords do not match",
              }}
            />
            {errors && errors.confirm_password && (
              <p className="text-red-500">
                {errors?.confirm_password?.message}
              </p>
            )}
          </div>
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

export default RegistrationForm;
