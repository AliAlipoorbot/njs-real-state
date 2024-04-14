import styles from "./CustomDatePicker.module.css";

import DatePicker from "react-multi-date-picker";

function CustomDatePicker({ propertyData, setPropertyData }) {
  const changeHandler = (e) => {
    const date = new Date(e);
    setPropertyData({ ...propertyData, constructionDate: date });
  };

  return (
    <div className={styles.container}>
      <p>Construction Date</p>
      <DatePicker
        value={propertyData.constructionDate}
        onChange={changeHandler}
      />
    </div>
  );
}

export default CustomDatePicker;
