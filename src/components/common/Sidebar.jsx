import React from "react";
import { FaFile, FaList } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { IoClipboard } from "react-icons/io5";
import { HiUsers } from "react-icons/hi";
import { BsLayoutWtf } from "react-icons/bs";
import { MdHistory } from "react-icons/md";
import { BsFillClipboard2MinusFill } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { useAuth } from "../../context/AuthContext";

const Sidebar = ({ role, isOpen, setIsOpen }) => {
  const navigate = useNavigate()

  const handleLogout = () => {
    // Local storage clear
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("userId");

    // Optional: saari keys ek saath clear karna ho to:
    // localStorage.clear();

    // Redirect to login
    navigate("/login");
  };

  const { user } = useAuth()

  const menus = {
    user: [
      { name: "Quotation", path: "createinvoice", icon: <BsFillClipboard2MinusFill /> },
      // { name: "Client List", path: "clientlist", icon: <HiUsers /> },
      { name: "Templates", path: "templates", icon: <BsLayoutWtf /> },
      { name: "View History", path: "history", icon: <MdHistory /> },
    ],
    admin: [
      { name: "Create Quotation", path: "createinvoice", icon: <BsFillClipboard2MinusFill /> },
      { name: "Dashboard", path: "dashboard", icon: <BsFillClipboard2MinusFill /> },
      { name: "Client List", path: "history", icon: <MdHistory /> },
      { name: "Templates", path: "templates", icon: <BsLayoutWtf /> },
      { name: "User Managment", path: "usermanagment", icon: <HiUsers /> },

    ],
    profile: [
      { name: "My Profile", path: "/profile", icon: <BsFillClipboard2MinusFill /> },
      { name: "Setting", path: "/setting", icon: <BsFillClipboard2MinusFill /> },
      { name: "Notification", path: "/notification", icon: <MdHistory /> },
      { name: "FAQ", path: "/faq", icon: <BsLayoutWtf /> },
      { name: "About App", path: "/aboutapp", icon: <HiUsers /> },

    ],
  };

  const links = menus[role] || [];

  return (
    <div
      className={`border-r border-gray-400 fixed md:static top-0 left-0 h-full w-64 bg-white shadow-md transform transition-transform duration-300 z-40 flex flex-col
      ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
    >
      {/* TOP SECTION */}
      {role !== "profile" && (
        <span className="flex gap-2 justify-center items-center h-20 text-2xl text-center border-b border-gray-200">
          <img src="/images/Logo.png" alt="" /> SD Quotation
        </span>
      )}

      {/* PROFILE TOP (only for profile role) */}
      {role === "profile" && (
        <div className="border-b border-gray-200 p-4  flex items-center gap-3">
          <div className="w-12 h-12 rounded-full overflow-hidden border">
            <img
              src="/images/image.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <p className="text-[1rem] font-medium text-black">{user?.name}</p>
            <p className="text-[0.8rem] text-gray-600">admin</p>
          </div>
        </div>
      )}

      {/* PROFILE MENU */}
      {role === "profile" ? (
        <div className="flex-1 overflow-y-auto">
          {links.map((link, index) => (
            <NavLink
              to={link.path}
              key={index}
              className="flex items-center justify-between px-5 py-6 border-b border-gray-200 bg-white"
            >
              <div className="flex items-center gap-3 text-gray-600 text-[1.1rem]">
                {link.icon}
                {link.name}
              </div>
              <span className="text-xl">›</span>
            </NavLink>
          ))}

          <button className="flex items-center  justify-center my-4 mx-auto px-16 py-2 rounded-lg bg-black text-white" onClick={handleLogout}>
            Logout
          </button>
        </div>
      ) : (
        // NORMAL SIDEBAR FOR USER & ADMIN
        <>
          <nav className="flex-1 py-4">
            <div className="space-y-2 px-4">
              {links.map((link, index) => (
                <NavLink
                  to={link.path}
                  key={index}
                  className={({ isActive }) =>
                    `flex items-center gap-3 my-3 px-4 py-2 text-[1rem] rounded-lg transition ${isActive
                      ? "bg-black text-white"
                      : "bg-white text-black hover:bg-gray-100"
                    }`
                  }
                >
                  {link.icon}
                  {link.name}
                </NavLink>
              ))}

            </div>

          </nav>
          <button className="flex items-center  justify-center my-4 mx-auto px-16 py-2 rounded-lg bg-black text-white" onClick={handleLogout}>
            Logout
          </button>
        </>
      )}

      {/* BOTTOM PROFILE (user/admin only) */}
      {role !== "profile" && (
        <div className="p-3 ">
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `flex items-center gap-3 px-5 py-2 text-[1rem] rounded-lg transition ${isActive
                ? "bg-black text-white"
                : "bg-white text-black hover:bg-gray-100"
              }`
            }
          >
            <div className="min-w-10 h-10 flex justify-center items-center rounded-full border">
              <img
                src="/images/image.png"
                alt="Profile"
                className="w-8 h-8 rounded-full"
              />
            </div>

            <span className="w-full flex flex-col text-black">
              <p className="text-[0.95rem]">{user?.name}</p>
              <p className="text-[0.75rem]">{role}</p>
            </span>
          </NavLink>
        </div>
      )}

    </div>
  );
};

export default Sidebar;