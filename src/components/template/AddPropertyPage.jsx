"use client";

import { useState } from "react";

import styles from "./AddPropertyPage.module.css";
import TextInput from "../module/TextInput";
import CategoryList from "../module/CategoryList";
import TextList from "../module/TextList";
import CustomDatePicker from "../module/CustomDatePicker";
import { ThreeDots } from "react-loader-spinner";
import toast, { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

function AddPropertyPage({ data }) {
  const [propertyData, setPropertyData] = useState({
    title: "",
    description: "",
    location: "",
    phone: "",
    price: "",
    realState: "",
    constructionDate: new Date(),
    category: "",
    rules: [],
    amenities: [],
  });
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (data) setPropertyData(data);
  }, []);

  const submitHandler = async () => {
    setLoading(true);
    const res = await fetch("/api/property", {
      method: "POST",
      body: JSON.stringify(propertyData),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    setLoading(false);

    if (data.error) {
      toast.error(data.error);
    } else {
      toast.success(data.message);
      router.push("/dashboard/my-property");
      router.refresh();
    }
  };

  const editHandler = async () => {
    setLoading(true);
    const res = await fetch("/api/property", {
      method: "PATCH",
      body: JSON.stringify(propertyData),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    setLoading(false);
    if (data.error) {
      toast.error(data.error);
    } else {
      toast.success(data.message);
      router.push("/dashboard/my-property");
      router.refresh();
    }
  };

  return (
    <div className={styles.container}>
      <h3>{data ? "Edit Property" : "Add Property"}</h3>
      <TextInput
        name="title"
        title="Title"
        propertyData={propertyData}
        setPropertyData={setPropertyData}
      />
      <TextInput
        name="description"
        title="Description"
        propertyData={propertyData}
        setPropertyData={setPropertyData}
        textarea={true}
      />
      <TextInput
        name="location"
        title="Address"
        propertyData={propertyData}
        setPropertyData={setPropertyData}
      />
      <TextInput
        name="phone"
        title="Phone Number"
        propertyData={propertyData}
        setPropertyData={setPropertyData}
        type="number"
      />
      <TextInput
        name="price"
        title="Price"
        propertyData={propertyData}
        setPropertyData={setPropertyData}
        type="number"
      />
      <TextInput
        name="realState"
        title="Real State"
        propertyData={propertyData}
        setPropertyData={setPropertyData}
      />
      <CategoryList
        propertyData={propertyData}
        setPropertyData={setPropertyData}
      />
      <TextList
        type="rules"
        title="Rules"
        propertyData={propertyData}
        setPropertyData={setPropertyData}
      />
      <TextList
        type="amenities"
        title="Amenities"
        propertyData={propertyData}
        setPropertyData={setPropertyData}
      />
      <CustomDatePicker
        propertyData={propertyData}
        setPropertyData={setPropertyData}
      />
      {loading ? (
        <ThreeDots
          visible={true}
          color="#4d8bff"
          height={15}
          ariaLabel="three-dots-loading"
          wrapperStyle={{ margin: "auto", padding: "10px" }}
        />
      ) : data ? (
        <button className={styles.submit} onClick={editHandler}>
          Edit Property
        </button>
      ) : (
        <button className={styles.submit} onClick={submitHandler}>
          Add Property
        </button>
      )}
      <Toaster />
    </div>
  );
}

export default AddPropertyPage;
