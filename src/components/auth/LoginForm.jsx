import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import Field from "../common/Field";

const LoginForm = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const submitForm = async (formData) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/auth/login`,
        formData
      );

      if (response.status === 200) {
        const { token, user } = response.data;
        if (token) {
          const authToken = token.accessToken;
          const refreshToken = token.refreshToken;
  
          setAuth({ user, authToken, refreshToken });
          navigate("/profile");
        }
      }
    } catch (error) {
      console.log(error);
      setError("root.random", {
        type: "random",
        message: `${formData.email} is not found!`,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <Field label={"Email"} error={errors.email}>
        <input
          {...register("email", { required: "Email ID is required!" })}
          type="email"
          name="email"
          id="email"
          className={`form-input ${
            errors.email ? "focus:border-red-500" : "focus:border-indigo-500"
          }`}
        />
      </Field>
      <Field label={"Password"} error={errors.password}>
        <input
          {...register("password", {
            required: "Password is required!",
            minLength: {
              value: 8,
              message: "Your password must be at least 8 characters",
            },
          })}
          type="password"
          name="password"
          id="password"
          className={`form-input ${
            errors.password ? "focus:border-red-500" : "focus:border-indigo-500"
          }`}
        />
      </Field>
      <p>{errors?.root?.random?.message}</p>
      <Field>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white p-3 rounded-md hover:bg-indigo-700 transition-all duration-200"
        >
          Login
        </button>
      </Field>
    </form>
  );
};

export default LoginForm;
