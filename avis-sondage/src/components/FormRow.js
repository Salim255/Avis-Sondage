const FormRow = ({ type, name, id, value, handleChange, labelText }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-row__label">
        {labelText}
      </label>
      <textarea
        type={type}
        name={name}
        value={value}
        id={id}
        onChange={handleChange}
        className="form-row__input"
      />
    </div>
  );
};
export default FormRow;
