"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios, { Axios } from "axios";
import toast from "react-hot-toast";

export default function ForgotPassword() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const onForgotPassword = async () => {
    try {
      const response = await axios.post("/api/users/forgotpassword", {email: email});
      console.log("Password reset mail sent", response.data);
      toast.success("Mail sent!");
    } catch (error: any) {
      console.log("Password reset failed", error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <label htmlFor="email">email</label>
      <input
        className="p-2 border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
        id="email"
        type="text"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          console.log(email);
        }}
        placeholder="email"
      />
      <button
        onClick={onForgotPassword}
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
      >
        Reset Password
      </button>
    </div>
  );
}
