import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Profil from "./Profil";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [email, setEmail] = useState(localStorage.getItem("email"));
  const navigate = useNavigate();

  const modalRef = useRef(null);

  console.log("token", token);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    setToken(null);
    setEmail(null);
    navigate("/login");
    window.location.reload();
  };

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsModalOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    if (window.innerWidth < 768) {
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full">
      <ul className="relative w-full min-h-[64px] flex justify-between items-center md:px-[3rem] px-[1rem] text-white bg-[#6C757E] shadow-lg">
        <figure>
          <img className="w-auto h-8" src="/icon/mickey.png" alt="Logo" />
        </figure>

        {/* Mobile toggle button */}
        <div className="md:hidden flex items-center gap-4">
          {token ? (
            <li>
              <Profil onClick={toggleModal} />
            </li>
          ) : (
            <Link
              to="/login"
              className="px-4 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
            >
              Login
            </Link>
          )}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center text-white focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Desktop menu */}
        <div className="max-md:hidden flex items-center gap-7">
          <li>
            <Link
              to="/"
              onClick={() => handleLinkClick("/")}
              className={activeLink === "/" ? "text-yellow-300" : ""}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={() => handleLinkClick("/about")}
              className={activeLink === "/about" ? "text-yellow-300" : ""}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={() => handleLinkClick("/contact")}
              className={activeLink === "/contact" ? "text-yellow-300" : ""}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/product"
              onClick={() => handleLinkClick("/product")}
              className={activeLink === "/product" ? "text-yellow-300" : ""}
            >
              Product
            </Link>
          </li>
          {token ? (
            <li>
              <Profil onClick={toggleModal} />
            </li>
          ) : (
            <Link
              to="/login"
              className="px-4 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="animate-slide-in-right absolute top-[100%] right-0 h-screen sm:w-[50%] w-[60%] bg-[#6C757E] flex flex-col gap-6 p-6">
            <li>
              <Link
                to="/"
                onClick={() => handleLinkClick("/")}
                className={activeLink === "/" ? "text-yellow-300" : ""}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={() => handleLinkClick("/about")}
                className={activeLink === "/about" ? "text-yellow-300" : ""}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={() => handleLinkClick("/contact")}
                className={activeLink === "/contact" ? "text-yellow-300" : ""}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/product"
                onClick={() => handleLinkClick("/product")}
                className={activeLink === "/product" ? "text-yellow-300" : ""}
              >
                Product
              </Link>
            </li>
          </div>
        )}

        {/* Modal */}
        {isModalOpen && (
          <div
            ref={modalRef}
            className="absolute top-[100%] right-4 w-[200px] h-[200px] mt-2 rounded-md p-4 bg-white shadow-md "
          >
            <figure className="flex items-center gap-3 border-b-2 border-gray-300 pb-2">
              <img
                className="w-[40px] h-[40px] rounded-full"
                src="/img/1.jpg"
                alt=""
              />
              <p className=" text-sm text-gray-600 font-bold">
                {email || "ไม่มีข้อมูลผู้ใช้งาน"}
              </p>
            </figure>

            <button className="flex items-center gap-2 mt-3 cursor-pointer">
              <figure className="flex justify-center items-center w-[30px] h-[30px] rounded-full bg-[#E4E5EC]">
                <PersonIcon sx={{ color: "gray", width: "18px" }} />
              </figure>
              <p className=" text-[12px] text-gray-400 font-semibold hover:text-gray-600">
                Edit Profile
              </p>
            </button>

            <button className="flex items-center gap-2 mt-2 cursor-pointer">
              <figure className="flex justify-center items-center w-[30px] h-[30px] rounded-full bg-[#E4E5EC]">
                <HelpOutlineIcon sx={{ color: "gray", width: "18px" }} />
              </figure>
              <p className=" text-[12px] text-gray-400 font-semibold hover:text-gray-600">
                Help & Support
              </p>
            </button>

            <button
              onClick={handleLogout}
              className="flex items-center gap-2 mt-2 cursor-pointer"
            >
              <figure className="flex justify-center items-center w-[30px] h-[30px] rounded-full bg-[#E4E5EC]">
                <LogoutIcon sx={{ color: "gray", width: "18px" }} />
              </figure>
              <p className=" text-[12px] text-gray-400 font-semibold hover:text-gray-600">
                Logout
              </p>
            </button>
          </div>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
