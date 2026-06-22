/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../assets/api";
import Swal from "sweetalert2";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import mapImg from "../assets/images/map.png";
function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
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
      console.error(err);

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
      className="min-h-screen flex items-center justify-center p-6 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${mapImg})` }}
    >
      <div className="absolute inset-0 bg-gray-800/40 backdrop-blur-md"></div>

      <div className="relative z-10 flex flex-col items-center justify-center gap-10 max-w-2xl w-full text-center">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="relative isolate overflow-hidden bg-gray-800/60 px-6 py-12 shadow-2xl rounded-2xl sm:rounded-3xl sm:px-24">
            <h2 class="mx-auto max-w-xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Smart Office Navigation and Service Directory
            </h2>

            <p class="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-300">
              Navigate inside JHCSC Canuto Campus with ease and discover their services at your
              fingertips!
            </p>

            <form class="mx-auto mt-10 flex max-w-md gap-x-4">
              <label for="passcode" class="sr-only">
                Passcode
              </label>
              <input
                id="passcode"
                name="passcode"
                type="password"
                autocomplete="passcode"
                required=""
                class="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                placeholder="Enter your Passcode"
              />

              <Link
                to={'/dashboard'}
                class="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Login
              </Link>
            </form>

            <svg
              viewBox="0 0 1024 1024"
              class="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
              aria-hidden="true"
            >
              <circle
                cx="512"
                cy="512"
                r="512"
                fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                fill-opacity="0.7"
              ></circle>
              <defs>
                <radialGradient
                  id="759c1415-0410-454c-8f7c-9a820de03641"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(512 512) rotate(90) scale(512)"
                >
                  <stop stop-color="#7775D6"></stop>
                  <stop offset="1" stop-color="#7ED321" stop-opacity="0"></stop>
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
