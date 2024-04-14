import styles from "./TextInput.module.css";

function TextInput({
  name,
  title,
  propertyData,
  setPropertyData,
  textarea = false,
  type = "text",
}) {
  const changeHandler = (e) => {
    const { name, value } = e.target;

    setPropertyData({ ...propertyData, [name]: value });
  };

  return (
    <div className={styles.container}>
      <label htmlFor={name}>{title}</label>
      {textarea ? (
        <textarea
          type={type}
          name={name}
          id={name}
          value={propertyData[name]}
          onChange={changeHandler}
        />
      ) : (
        <input
          type={type}
          name={name}
          id={name}
          value={propertyData[name]}
          onChange={changeHandler}
        />
      )}
    </div>
  );
}

export default TextInput;
