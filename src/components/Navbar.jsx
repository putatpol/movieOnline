import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

function Navbar() {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  // console.log(user)

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-between  p-4 z-[100] w-full absolute text-white">
      <Link to="/">
        <h1 className="text-4xl font-bold cursor-pointer">
          You<span className="text-lime-600">DOO</span>
        </h1>
      </Link>
      {user?.email ? (
        <div>
          <Link to="/account">
            <button className="pr-4">Account</button>
          </Link>

          <button
            onClick={handleLogout}
            className="bg-lime-600 rounded-3xl cursor-pointer px-6 py-2"
          >
            Log out
          </button>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button className="pr-4">Sign in</button>
          </Link>
          <Link to="/signup">
            <button className="bg-lime-600 rounded-3xl cursor-pointer px-6 py-2">
              Sign up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
