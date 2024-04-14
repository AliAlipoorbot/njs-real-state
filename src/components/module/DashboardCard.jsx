"use client";

import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import Card from "./Card";
import styles from "./DashboardCard.module.css";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";


function DashboardCard({ data }) {
  const router = useRouter()

  const editHandler = () => {
    router.push(`/dashboard/my-property/${data._id}`)
  };

  const deleteHandler = async () => {
    const res = await fetch(`/api/property/delete/${data._id}`,{
      method: "DELETE"
    })
    const result = await res.json()
    if(result.error) {
      toast.error(result.error)
    } else {
      toast.success(result.message)
      router.refresh()
    }
  };

  return (
    <div className={styles.container}>
      <Card data={data} />
      <div className={styles.main}>
        <button onClick={editHandler}>
          <FiEdit />
          Edit
        </button>
        <button onClick={deleteHandler}>
          <AiOutlineDelete />
          Delete
        </button>
      </div>
      <Toaster />
    </div>
  );
}

export default DashboardCard;
