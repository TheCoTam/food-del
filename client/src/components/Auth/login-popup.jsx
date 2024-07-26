import { useContext, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

import { X, TriangleAlert, CircleCheck } from "lucide-react";
import { StoreContext } from "@/context/StoreContext";

const LoginPopup = ({ setShowLogin }) => {
  const { url, token, setToken } = useContext(StoreContext);
  const [currentState, setCurrentState] = useState("Login");
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState("");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let type = null;
    if (currentState === "Sign Up") {
      type = "register";
    }
    if (currentState === "Login") {
      type = "login";
    }
    if (!type) {
      toast.error("Something went wrong");
      return;
    }

    const endpoint = `${url}/api/user/${type}`;
    const response = await axios.post(endpoint, data);
    if (!response.data.success) {
      setMessage(response.data.message);
      setIsError(true);
    }
    if (response.data.success) {
      setMessage(response.data.message);
      setIsSuccess(true);
      if (currentState === "Login") {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        setShowLogin(false);
      }
    }
  };

  return (
    <div className="absolute w-full h-full bg-gray-700 z-[1] flex items-center justify-center bg-opacity-80">
      <form
        className="flex flex-col bg-white rounded-xl p-5 animate-fadeIn1s w-[300px] sm:w-[350px] md:w-[400px]"
        onSubmit={handleSubmit}
      >
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">{currentState}</h2>
          <X onClick={() => setShowLogin(false)} className="cursor-pointer" />
        </div>
        <div className="flex flex-col gap-2 mt-8">
          {currentState === "Sign Up" && (
            <>
              <p>Name</p>
              <input
                type="text"
                value={data.name}
                name="name"
                onChange={handleChange}
                placeholder="John Doe"
                className="p-3 rounded-lg border border-solid"
                required
              />
            </>
          )}
          <p>Email</p>
          <input
            type="email"
            placeholder="Example@gmail.com"
            value={data.email}
            name="email"
            onChange={handleChange}
            className="p-3 rounded-lg border border-solid"
            required
          />
          <p>Password</p>
          <input
            type="password"
            placeholder="********"
            value={data.password}
            name="password"
            onChange={handleChange}
            className="p-3 rounded-lg border border-solid"
            required
          />
          {currentState === "Sign Up" && (
            <>
              <p>Confirm Password</p>
              <input
                type="password"
                placeholder="********"
                value={data.confirmPassword}
                name="confirmPassword"
                onChange={handleChange}
                className="p-3 rounded-lg border border-solid"
                required
              />
            </>
          )}
        </div>
        {(isError || isSuccess) && (
          <div
            className={`flex items-center gap-5 ${isError && "bg-red-100"} ${
              isSuccess && "bg-green-100"
            } px-3 py-2 rounded-md ${isError && "text-red-500"} ${
              isSuccess && "text-green-500"
            } mt-4`}
          >
            {isError && <TriangleAlert />}
            {isSuccess && <CircleCheck />}
            <p>{message}</p>
          </div>
        )}
        <button className="my-5 bg-teal-400 hover:bg-teal-500 active:bg-teal-600 w-max self-center p-2 rounded-lg text-gray-800">
          {currentState === "Sign Up" ? "Create Account" : "Login"}
        </button>
        {currentState === "Sign Up" && (
          <div className="flex items-start text-sm space-x-2 text-gray-500">
            <input
              type="checkbox"
              id="condition"
              className="mt-[4px]"
              required
            />
            <label htmlFor="condition">
              By continuing, I agree to the terms of use & privacy policy.
            </label>
          </div>
        )}
        {currentState !== "Sign Up" ? (
          <p className="mt-5">
            Create a new account?{" "}
            <span
              onClick={() => {
                setCurrentState("Sign Up");
                setIsError(false);
                setIsSuccess(false);
                setData({
                  name: "",
                  email: "",
                  password: "",
                  confirmPassword: "",
                });
              }}
              className="cursor-pointer text-orange-600 font-semibold"
            >
              Click here!
            </span>
          </p>
        ) : (
          <p className="mt-5">
            Already have an account?{" "}
            <span
              onClick={() => {
                setCurrentState("Login");
                setIsError(false);
                setIsSuccess(false);
                setData({
                  name: "",
                  email: "",
                  password: "",
                  confirmPassword: "",
                });
              }}
              className="cursor-pointer text-orange-600 font-semibold"
            >
              Login here
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
