const Input = ({
  htmlFor,
  labelText,
  type,
  id,
  name,
  value,
  onChange,
  className,
  placeholder,
  required,
}) => {
  return (
    <>
      <label htmlFor={htmlFor} className={className}>
        {labelText}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
      />
    </>
  );
};

export default Input;
