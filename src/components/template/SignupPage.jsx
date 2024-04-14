"use client";

import { useState } from "react";
import styles from "./Signup.module.css";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { ThreeDots } from "react-loader-spinner";

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const registrationHandler = async (event) => {
    event.preventDefault();

    if (password !== rePassword) {
      toast.error("Confirm Password Not Match!");
      return;
    }
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
      <form>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="re-password">Confirm Password:</label>
        <input
          type="password"
          id="re-password"
          value={rePassword}
          onChange={(e) => setRePassword(e.target.value)}
        />
        {loading ? (
          <ThreeDots
            visible={true}
            color="#4d8bff"
            height={10}
            ariaLabel="three-dots-loading"
            wrapperStyle={{ margin: "auto" }}
          />
        ) : (
          <button type="submit" onClick={registrationHandler}>
            Register
          </button>
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
