/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../assets/api";
import Swal from "sweetalert2";
import mapImg from "../assets/images/map.png";

function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await api.post("/api/login/", {
        username: form.username,
        password: form.password,
      });

      const data = res.data;

      localStorage.setItem("user", JSON.stringify(data));

      if (data.user.is_staff === true || data.user.is_superuser === true) {
        await Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: "Welcome back!",
          confirmButtonColor: "#2563eb",
        });

        navigate("/dashboard");
      } else {
        await Swal.fire({
          icon: "warning",
          title: "Account Pending",
          text: "You need to wait for admin's approval to access the system",
          confirmButtonColor: "#f59e0b",
        });

        return;
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: "Incorrect username or password",
        confirmButtonColor: "#dc2626",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="w-full min-h-screen flex items-center justify-center p-4 sm:p-6 bg-cover bg-center bg-no-repeat relative overflow-x-hidden"
      style={{
        backgroundImage: `url(${mapImg})`,
      }}
    >
      <div className="absolute inset-0 bg-gray-800/40 backdrop-blur-md"></div>

      <div className="relative z-10 w-full max-w-md sm:max-w-xl md:max-w-2xl">
        <div className="relative isolate overflow-hidden bg-gray-800/60 px-4 sm:px-10 py-10 shadow-2xl rounded-2xl sm:rounded-3xl">
          <h2 className="mx-auto max-w-xl text-center text-xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
            Smart Office Navigation and Service Directory
          </h2>

          <p className="mx-auto mt-2 max-w-xl text-center text-sm sm:text-lg leading-6 sm:leading-8 text-gray-300">
            Navigate inside JHCSC Canuto Campus with ease and discover their
            services at your fingertips!
          </p>

          <form className="mx-auto mt-8 flex flex-col sm:flex-row max-w-md gap-3 sm:gap-x-4">
            <label htmlFor="passcode" className="sr-only">
              Passcode
            </label>

            <input
              id="passcode"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              className="w-full min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white text-sm"
              placeholder="Enter your Passcode"
            />

            <Link
              to={"/dashboard"}
              className="w-full sm:w-auto flex justify-center rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100"
            >
              Login
            </Link>
          </form>

          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[30rem] sm:h-[50rem] md:h-[64rem] w-[30rem] sm:w-[50rem] md:w-[64rem] -translate-x-1/2"
            aria-hidden="true"
          >
            <circle
              cx="512"
              cy="512"
              r="512"
              fill="url(#gradient)"
              fillOpacity="0.7"
            ></circle>
            <defs>
              <radialGradient
                id="gradient"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(512 512) rotate(90) scale(512)"
              >
                <stop stopColor="#7775D6"></stop>
                <stop offset="1" stopColor="#7ED321" stopOpacity="0"></stop>
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Login;
