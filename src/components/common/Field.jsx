/* eslint-disable react/prop-types */
const FieldInput = ({
  id,
  type,
  label,
  name,
  register,
  validation,
  placeholder,
}) => {
  return (
    <div>
      <label htmlFor={id} className="block mb-2">
        {label}
      </label>
      <input
        type={type}
        id={id}
        {...register(name, validation)}
        className="w-full px-4 py-3 rounded-lg border border-gray-300"
        placeholder={placeholder}
      />
    </div>
  );
};

export default FieldInput;
