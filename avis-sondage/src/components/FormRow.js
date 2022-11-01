const FormRow = ({ type, name, id, value, handleChange, labelText }) => {
  console.log("====================================");
  console.log(id, "DDDD");
  console.log("====================================");
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        id={id}
        onChange={handleChange}
        className="form-input"
      />
    </div>
  );
};
export default FormRow;
