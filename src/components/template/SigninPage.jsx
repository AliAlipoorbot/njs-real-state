"use client";

import { useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { ThreeDots } from "react-loader-spinner";
import styles from "./Signup.module.css";

import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function SigninPage() {
  const [loading, setLoading] = useState(false);

  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(4).max(20).required(),
  });

  const { register, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(schema),
  });

  const router = useRouter();

  const registrationHandler = async (data) => {
    // event.preventDefault();

    setLoading(true);
    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });
    setLoading(false);
    if (res.error) {
      toast.error(res.error);
    } else {
      router.push("/");
    }
  };

  return (
    <div className={styles.form}>
      <h4>Login Form</h4>
      <form onSubmit={handleSubmit(registrationHandler)}>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          {...register("email")}
        />
        <span>{errors.email?.message}</span>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          {...register("password")}
        />
        <span>{errors.password?.message}</span>
        {loading ? (
          <ThreeDots
            visible={true}
            color="#4d8bff"
            height={10}
            ariaLabel="three-dots-loading"
            wrapperStyle={{ margin: "auto" }}
          />
        ) : (
          // <button type="submit" onClick={registrationHandler}>
          <button type="submit">Login</button>
        )}
      </form>
      <p>
        Create an Account?
        <Link href="/signup">Sign Up</Link>
      </p>
      <Toaster position="top-center" />
    </div>
  );
}

export default SigninPage;
