"use client";

import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

import { sp } from "@/utils/separatedNumber";
import styles from "./AdminCard.module.css";

function AdminCard({ data: { _id, title, description, price, location } }) {
  const router = useRouter();

  const publishHandler = async () => {
    const res = await fetch(`/api/property/publish/${_id}`, {
      method: "PATCH",
    });
    const result = await res.json();
    if (result.message) {
      toast.success(result.message);
      router.refresh();
    }
  };

  const deleteHandler = async () => {
    const res = await fetch(`/api/property/publish/${_id}`, {
      method: "DELETE",
    });
    const result = await res.json();
    if (result.message) {
      toast.success(result.message);
      router.refresh();
    }
  };

  return (
    <div className={styles.container}>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className={styles.properties}>
        <span>{location}</span>
        <span>{sp(price)}</span>
      </div>
      <button onClick={publishHandler}>Release</button>
      <button onClick={deleteHandler}>Delete</button>
      <Toaster />
    </div>
  );
}

export default AdminCard;
