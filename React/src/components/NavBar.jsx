import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";
import hivemind3 from "../assets/hivemind3.png";

const NavBar = () => {
     const [active, setActive] = useState("");
     const [toggle, setToggle] = useState(false);

     const navigate = useNavigate();

     const handleNavToggle = () => {
          setToggle(!toggle);
     };

     const handleclick = (e) => {
          switch (e.target.name) {
               case "login":
                    navigate("/login");
                    setActive("");
                    break;

               case "signup":
                    navigate("/signup");
                    setActive("");
                    break;
               default:
                    break;
          }
     };

     return (
          <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
               <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                    <Link
                         to="/"
                         className="flex items-center gap-2"
                         onClick={() => {
                              setActive("");
                         }}
                    >
                         <img src={hivemind3} alt="logo" className="w-20 h-15 object-contain" />
                    </Link>
                    <div className="col sm:flex">
                         <ul className="list-none hidden sm:flex flex-row gap-10">
                              {navLinks.map((link) => (
                                   <li
                                        key={`linkList-${link.id}`}
                                        className={`${
                                             active === link.title ? "text-white" : "text-secondary"
                                        } hover:text-white text-[18px] font-medium cursor-pointer`}
                                        onClick={() => setActive(link.title)}
                                   >
                                        <Link to={`/${link.id}`}>{link.title}</Link>
                                   </li>
                              ))}
                         </ul>
                    </div>

                    <div className="list-none hidden sm:flex  justify-between items-center max-w-7xl col">
                         <button
                              name="login"
                              type="button"
                              className="bg-secondary py-4 px-8 outline-none w-fit sm:w-auto text-primary font-bold shadow-md shadow-primary rounded-xl m-1"
                              onClick={handleclick}
                         >
                              Login
                         </button>
                         <button
                              name="signup"
                              type="button"
                              className="bg-secondary py-4 px-8 outline-none w-fit sm:w-auto text-primary font-bold shadow-md shadow-primary rounded-xl m-1"
                              onClick={handleclick}
                         >
                              SignUp
                         </button>
                    </div>

                    <div className="sm:hidden flex flex-1 justify-end items-center">
                         <img
                              src={toggle ? close : menu}
                              alt="menu"
                              className="w-[28px] h-[28px] object-contain cursor-pointer"
                              onClick={handleNavToggle}
                         />
                         <div
                              className={`${
                                   !toggle ? "hidden" : "flex"
                              } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
                         >
                              <ul className="list-none flex justify-end items-start flex-col gap-4">
                                   {navLinks.map((link) => (
                                        <li
                                             key={`linkList-${link.id}`}
                                             className={`${
                                                  active === link.title ? "text-white" : "text-secondary"
                                             } font-poppins font-medium cursor-pointer text-[16px]`}
                                             onClick={() => {
                                                  setToggle(!toggle);
                                                  setActive(link.title);
                                             }}
                                        >
                                             <a href={`/${link.id}`}>{link.title}</a>
                                        </li>
                                   ))}
                                   <a href="Login" className="font-poppins font-medium cursor-pointer text-[16px]">
                                        Login
                                   </a>
                                   <a href="/Signup" className="font-poppins font-medium cursor-pointer text-[16px]">
                                        SignUp
                                   </a>
                              </ul>
                         </div>
                    </div>
               </div>
          </nav>
     );
};

export default NavBar;
