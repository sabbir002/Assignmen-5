import React from "react";
import LoginForm from "../components/auth/LoginForm";

const LoginPage = () => {
  return (
    <div>
      <section className="container">
        <div className="w-full md:w-1/2 mx-auto bg-[#030317] p-8 rounded-md mt-12">
          <h2 className="text-2xl font-bold mb-6">Login</h2>
          <LoginForm />
          <p className="text-center">
            {`Don't have an account? `}
            <a
              href="./register.html"
              className="text-indigo-600 hover:underline"
            >
              Register
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
