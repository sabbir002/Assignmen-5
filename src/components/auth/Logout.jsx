import React from "react";
import { Link, useNavigate } from "react-router-dom";
import LogoutIcon from "../../assets/icons/logout.svg";
import { useAuth } from "../../hooks/useAuth";

const Logout = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    setAuth({});
    navigate("/login");
  };
  return (
    <li
      onClick={handleLogout}
      className="bg-gray-500 text-white px-6 py-2 md:py-3 rounded-md hover:bg-gray-600 transition-all duration-100"
    >
      <Link>
        <img src={LogoutIcon} className="h-5" />
      </Link>
    </li>
  );
};

export default Logout;
