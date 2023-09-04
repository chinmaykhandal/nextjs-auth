"use client"
import axios from "axios";
import React, { useState, useEffect } from "react";


export default function ResetPassword() {
    const [password, setPassword] = useState("");
    const [token, setToken] = useState("");
    useEffect(() => {
        const urlToken = window.location.search.split("=")[1];
        setToken(urlToken || "");
      }, []);

    const resetPassword = async () => {
        try {
            await axios.post("api/users/resetpassword", { token, password});
            console.log("password updated!!")
          } catch (error: any) {
            console.log(error.response.data);
          }
    }

    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <label htmlFor="email">Please enter new Password</label>
      <input
        className="p-2 border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
        id="password"
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        placeholder="password"
      />
       <button
        onClick={resetPassword}
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
      >
        Reset Password
      </button>
        </div>
    )
}