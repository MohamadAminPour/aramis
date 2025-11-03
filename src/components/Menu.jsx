import { FaRegUser } from "react-icons/fa";
import { IoChevronDown } from "react-icons/io5";
import { LuSearch } from "react-icons/lu";
import { RiShoppingCartLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <>
      <div className="menu mt-5 px-5 flex items-center justify-between">
        <div className="menu-logo flex items-center justify-center">
          <NavLink to="/" className="flex items-center font-hezargan text-[1.5rem]">
          <img src="../public/images/logo.png" alt="" className="w-8 ml-2" />
            آرامیس
          </NavLink>
        </div>
        <div className="menu-links">
          <ul className="flex items-center justify-center gap-5">
            <NavLink
              to="/"
              className="NavLink text-zinc-500 hover:text-black transition-all duration-200"
            >
              صفحه اصلی
            </NavLink>
            <NavLink
              to="/Bedspreads"
              className="NavLink text-zinc-500 flex items-center justify-center gap-1 hover:text-black transition-all duration-200"
            >
              روتختی ها
              <IoChevronDown />
            </NavLink>
            <NavLink
              to="/Mattresses"
              className="NavLink text-zinc-500 flex items-center justify-center gap-1 hover:text-black transition-all duration-200"
            >
              {" "}
              تشک ها
              <IoChevronDown />
            </NavLink>
            <NavLink
              to="/Pillows"
              className="NavLink text-zinc-500 flex items-center justify-center gap-1 hover:text-black transition-all duration-200"
            >
              {" "}
              بالش ها
              <IoChevronDown />
            </NavLink>
            <a href="#About"
              className="NavLink text-zinc-500 hover:text-black transition-all duration-200"
            >
              درباره ما
            </a>
          </ul>
        </div>
        <div className="menu-icons flex items-center justify-center gap-3">
          <NavLink
            to="/Search"
            className="hover:bg-zinc-300 p-1 rounded-full transition-all duration-300"
          >
            <LuSearch className="text-[1.2rem]" />
          </NavLink>
          <NavLink
            to="/Cart"
            className="hover:bg-zinc-300 p-1 rounded-full transition-all duration-300"
          >
            <RiShoppingCartLine className="text-[1.2rem]" />
          </NavLink>
          <NavLink
            to="/Login"
            className="hover:bg-zinc-300 p-1 rounded-full transition-all duration-300"
          >
            <FaRegUser className="text-[1.2rem]" />
          </NavLink>
        </div>
      </div>
    </>
  );
}
