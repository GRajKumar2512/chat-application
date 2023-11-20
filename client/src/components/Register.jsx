import React, { useState } from "react";
import axios from "axios";
import Link from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit() {
    const { data } = await axios.post("/register", {
      username,
      email,
      password,
    });
    console.log(data);
  }

  return (
    <div className="bg-green-100 min-h-screen flex flex-col justify-center items-center">
      <h3 className="font-bold text-xl text-green-700 mb-2">Chat-App</h3>
      <form className="w-64 " onSubmit={handleSubmit}>
        <input
          className="w-full block outline-none rounded-md mb-2 py-1 px-2"
          placeholder="username"
          value={username}
          onChange={(ev) => setUsername(ev.target.value)}
        />
        <input
          className="w-full block outline-none rounded-md mb-2 py-1 px-2"
          placeholder="username"
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
        />
        <input
          className="w-full block outline-none rounded-md mb-2 py-1 px-2"
          placeholder="password"
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
        />
        <button
          type="submit"
          className="w-full py-1 px-2 bg-green-500 rounded-md shadow-md shadow-green-700 text-white"
        >
          Register
        </button>
        <div className="mt-2 text-center">
          Already have an account?{" "}
          <Link to={"/login"} className="text-green-700">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
