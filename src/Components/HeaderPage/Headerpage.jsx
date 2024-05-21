import React from "react";
import { useRef, useEffect, useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../Images/logo.jpg";
import { BiMenu } from "react-icons/bi";
import { authContext } from "../../context/AuthContext";


const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/docters",
    display: "Find A Docter",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];





const Headerpage = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const { user, role, token } = useContext(authContext);
  

  const handleStickyHeader = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  useEffect(() => {
    handleStickyHeader();
    return () => window.removeEventListener("scroll", handleStickyHeader);
  });

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  return (
    <header className="header flex items-center " ref={headerRef}>
      <div className="container">
        <div className=" flex items-center justify-between">
          {/*-------logo---------*/}
          <div>
            <img className=" h-14 w-14" src={logo} alt="" />
          </div>

          {/*--------menu-----*/}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu  flex items-center gap-[2.7rem]">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? " text-primaryColor text-[16px] leading-7 font-[600]"
                        : " text-textColor  text-[16px] leading-7 font-[500] hover:text-primaryColor"
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          {/*-------nav right --------*/}
          <div className="flex items-center"> {/* Added container with flex styling */}
          {token && user ? (
            <div className="flex items-center ml-4"> {/* Added container with flex styling */}
              <Link
                to={`${role === 'doctor' ? '/doctors/profile/me' : '/users/profile/me'}`}
                className="flex items-center"
              >
                <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
                <img src={user.photo} alt=" " className="w-full rounded-full" />
                </figure>
                
                
              </Link>
            </div>
          ) : (
            <Link to="/login">
              <button className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center rounded-[50px]">
                Login
              </button>
            </Link>
          )}

          <span className="md:hidden" onClick={toggleMenu}>
          <BiMenu className="w-6 h-6 cursor-pointer"></BiMenu>
        </span>

        </div>
        </div>
      </div>
    </header>
  );
};

export default Headerpage;
