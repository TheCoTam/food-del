import { useState } from "react";
import { X } from "lucide-react";

const LoginPopup = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState("Sign Up");

  return (
    <div className="absolute w-full h-full bg-gray-700 z-[1] flex items-center justify-center bg-opacity-80">
      <form className="flex flex-col bg-white rounded-xl p-5 animate-fadeIn1s">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">{currentState}</h2>
          <X onClick={() => setShowLogin(false)} className="cursor-pointer" />
        </div>
        <div className="flex flex-col gap-3 mt-8">
          {currentState === "Sign Up" && (
            <>
              <p>Name</p>
              <input
                type="text"
                placeholder="e.g John Doe"
                className="p-3 rounded-lg border border-solid"
                required
              />
            </>
          )}
          <p>Email</p>
          <input
            type="email"
            placeholder="Example@gmail.com"
            className="p-3 rounded-lg border border-solid"
            required
          />
          <p>Password</p>
          <input
            type="password"
            placeholder="********"
            className="p-3 rounded-lg border border-solid"
            required
          />
        </div>
        <button className="my-5 bg-teal-400 hover:bg-teal-500 active:bg-teal-600 w-max self-center p-2 rounded-lg text-gray-800">
          {currentState === "Sign Up" ? "Create Account" : "Login"}
        </button>
        <div className="flex items-start text-sm space-x-2 text-gray-500">
          <input type="checkbox" id="condition" className="mt-[4px]" />
          <label htmlFor="condition">
            By continuing, I agree to the terms of use & privacy policy.
          </label>
        </div>
        {currentState !== "Sign Up" ? (
          <p className="mt-5">
            Create a new account?{" "}
            <span
              onClick={() => setCurrentState("Sign Up")}
              className="cursor-pointer text-orange-600 font-semibold"
            >
              Click here!
            </span>
          </p>
        ) : (
          <p className="mt-5">
            Already have an account?{" "}
            <span
              onClick={() => setCurrentState("Login")}
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
