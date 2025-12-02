import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../main";
import toast from "react-hot-toast";
import { FiLogOut } from "react-icons/fi";
import { SiFurrynetwork } from "react-icons/si";
import { GoSignIn } from "react-icons/go";

const Navbar = () => {
  const { user, logOutUser } = use(AuthContext);

  const handleLogout = () => {
    logOutUser()
      .then(() => {
        toast.success("Logged out successfully");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const menus = (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-green-600 underline font-bold" : ""
        }
        to="/"
      >
        <li>
          <a>Home</a>
        </li>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-green-600 underline font-bold" : ""
        }
        to="/services"
      >
        <li>
          <a>Services</a>
        </li>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-green-600 underline font-bold" : ""
        }
        to="/pricing"
      >
        <li>
          <a>Pricing</a>
        </li>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-green-600 underline font-bold" : ""
        }
        to="/booknow"
      >
        <li>
          <a>Book Now</a>
        </li>
      </NavLink>
      {
        user && <NavLink
        className={({ isActive }) =>
          isActive ? "text-green-600 underline font-bold" : ""
        }
        to="/profile"
      >
        <li>
          <a>My Profile</a>
        </li>
      </NavLink>
      }
    </>
  );
  return (
    <div className=" bg-green-50 sticky top-0 z-50 h-16">
      <div className="navbar w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
            >
              {menus}
            </ul>
          </div>
          <Link className="flex justify-start items-center gap-1 text-green-600" to="/">
          <SiFurrynetwork size={24} />
          <h1 className="text-xl md:text-2xl"><span className="">Furry</span><span className=" font-bold">Glow</span></h1>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menus}</ul>
        </div>

        {user ? (
          <div className="navbar-end flex gap-2 items-center">
            
            <div
              className="tooltip tooltip-left cursor-pointer"
              data-tip={user?.displayName || "User"}
            >
              <img
                src={user?.photoURL}
                className="w-7 h-7 rounded-full"
                alt="avatar"
              />
            </div>
            <button
              className="btn btn-sm bg-amber-200 text-green-600 hover:bg-green-600 hover:text-white"
              onClick={handleLogout}
            > <FiLogOut />
              Logout
            </button>
          </div>
        ) : (
          <div className="navbar-end flex gap-2 items-center">
            <Link to="/login">
              <a className="btn btn-sm bg-amber-200 text-green-600 hover:bg-green-600 hover:text-white">Login <GoSignIn /></a>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
