import { useForm } from "react-hook-form";
import FieldInput from "./common/Field";

const LoginForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (formData) => {
    console.log(formData);
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
