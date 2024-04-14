import styles from "./CategoryList.module.css";

function CategoryList({ propertyData, setPropertyData }) {
  const { category } = propertyData;

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setPropertyData({ ...propertyData, [name]: value });
  };

  return (
    <div className={styles.container}>
      <label htmlFor="category">
        Categories
        <select
          name="category"
          id="category"
          onChange={changeHandler}
          value={category}
        >
          <option value="" disabled hidden>Choose Category</option>
          <option value="villa" >Villa</option>
          <option value="apartment">Apartment</option>
          <option value="store">Store</option>
          <option value="office">Office</option>
        </select>
      </label>
    </div>
  );
}

export default CategoryList;
