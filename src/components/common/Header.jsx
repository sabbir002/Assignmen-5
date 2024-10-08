import React from "react";
import { Link } from "react-router-dom";
import searchIcon from "../../assets/icons/search.svg";
import lwsLogo from "../../assets/logo.svg";
import { useAuth } from "../../hooks/useAuth";
import Logout from "../auth/Logout";
import Avatar from "./Avatar";
const Header = () => {
  const { auth } = useAuth();

  const user = auth?.user;
  return (
    <header>
      <nav className="container">
        <div>
          <Link to="/">
            <img className="w-32" src={lwsLogo} alt="lws" />
          </Link>
        </div>

        <div>
          <ul className="flex items-center space-x-5">
            <li>
              <Link
                to="/create"
                className="bg-indigo-600 text-white px-6 py-2 md:py-3 rounded-md hover:bg-indigo-700 transition-all duration-200"
              >
                Write
              </Link>
            </li>
            <li>
              <Link
                to="./search.html"
                className="flex items-center gap-2 cursor-pointer"
              >
                <img src={searchIcon} alt="Search" />
                <span>Search</span>
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="text-white/50 hover:text-white transition-all duration-200"
              >
                Login
              </Link>
            </li>
            <Logout />
            <li className="flex items-center">
              {auth?.user && (
                <>
                  <div className="avater-img bg-orange-600 text-white">
                    <Avatar user={auth?.user} />
                  </div>
                  <Link to="/profile">
                    <span className="text-white ml-2">{`${user?.firstName} ${user?.lastName}`}</span>
                  </Link>
                </>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
