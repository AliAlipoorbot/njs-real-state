"use client";

import { useState } from "react";
import styles from "./Signup.module.css";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { ThreeDots } from "react-loader-spinner";

import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function SignupPage() {
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(4).max(20).required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "password don't match!")
      .required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const registrationHandler = async ({ email, password }) => {
    setLoading(true);
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    setLoading(false);
    if (res.status === 201) {
      toast.success(data.message);
      setTimeout(() => {
        router.push("/signin");
      }, 2500);
    } else {
      toast.error(data.error);
    }
  };

  return (
    <div className={styles.form}>
      <h4>Registration Form</h4>
      <form onSubmit={handleSubmit(registrationHandler)}>
        <label htmlFor="email">Email:</label>
        <input type="text" id="email" {...register("email")} />
        <span>{errors.email?.message}</span>

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" {...register("password")} />
        <span>{errors.password?.message}</span>

        <label htmlFor="re-password">Confirm Password:</label>
        <input
          type="password"
          id="re-password"
          {...register("confirmPassword")}
        />
        <span>{errors.confirmPassword?.message}</span>

        {loading ? (
          <ThreeDots
            visible={true}
            color="#4d8bff"
            height={10}
            ariaLabel="three-dots-loading"
            wrapperStyle={{ margin: "auto" }}
          />
        ) : (
          <button type="submit">Register</button>
        )}
      </form>
      <p>
        Have an Account?
        <Link href="/signin">Sign In</Link>
      </p>
      <Toaster position="top-center" />
    </div>
  );
}

export default SignupPage;
