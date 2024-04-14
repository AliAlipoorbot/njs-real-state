import { MdOutlineLibraryAdd } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import styles from "./TextList.module.css";

function TextList({ title, propertyData, setPropertyData, type }) {
  const addHandler = () => {
    setPropertyData({ ...propertyData, [type]: [...propertyData[type], ""] });
  };

  const changeHandler = (e, index) => {
    const { value } = e.target;
    const list = [...propertyData[type]];
    list[index] = value;
    setPropertyData({ ...propertyData, [type]: list });
  };

  const deleteHandler = (index) => {
    const list = [...propertyData[type]];
    list.splice(index, 1);
    setPropertyData({ ...propertyData, [type]: list });
  };

  return (
    <div className={styles.container}>
      <p>{title}</p>
      {propertyData[type].map((i, index) => (
        <div className={styles.card} key={index}>
          <input
            type="text"
            value={i}
            onChange={(e) => changeHandler(e, index)}
          />
          <button onClick={() => deleteHandler(index)}>
            <AiOutlineDelete />
          </button>
        </div>
      ))}
      <button onClick={addHandler}>
        <MdOutlineLibraryAdd />
        <span className={styles.button_span}>Add</span>
      </button>
    </div>
  );
}

export default TextList;
