import { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { IoChevronDown, IoMenu, IoClose } from "react-icons/io5";
import { LuSearch } from "react-icons/lu";
import { RiShoppingCartLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="container mx-auto px-5 py-3 flex items-center justify-between">
        {/* لوگو */}
        <div className="flex items-center">
          <NavLink
            to="/"
            className="flex items-center font-hezargan text-[1.5rem]"
          >
            <img src="/images/logo.png" alt="logo" className="w-8 ml-2" />
            آرامیس
          </NavLink>
        </div>

        {/* دکمه منوی موبایل */}
        <button
          className="md:hidden text-2xl text-zinc-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <IoClose /> : <IoMenu />}
        </button>

        {/* لینک‌های دسکتاپ */}
        <nav className="hidden md:flex items-center gap-5">
          <NavLink
            to="/"
            className="text-zinc-500 hover:text-black transition-all duration-200"
          >
            صفحه اصلی
          </NavLink>
          <NavLink
            to="/Bedspreads"
            className="text-zinc-500 flex items-center gap-1 hover:text-black transition-all duration-200"
          >
            روتختی‌ها <IoChevronDown />
          </NavLink>
          <NavLink
            to="/Mattresses"
            className="text-zinc-500 flex items-center gap-1 hover:text-black transition-all duration-200"
          >
            تشک‌ها <IoChevronDown />
          </NavLink>
          <NavLink
            to="/Pillows"
            className="text-zinc-500 flex items-center gap-1 hover:text-black transition-all duration-200"
          >
            بالش‌ها <IoChevronDown />
          </NavLink>
          <a
            href="#About"
            className="text-zinc-500 hover:text-black transition-all duration-200"
          >
            درباره ما
          </a>
        </nav>

        {/* آیکون‌ها */}
        <div className="hidden md:flex items-center gap-3">
          <NavLink
            to="/Search"
            className="hover:bg-zinc-200 p-1 rounded-full transition-all"
          >
            <LuSearch className="text-[1.2rem]" />
          </NavLink>
          <NavLink
            to="/Cart"
            className="hover:bg-zinc-200 p-1 rounded-full transition-all"
          >
            <RiShoppingCartLine className="text-[1.2rem]" />
          </NavLink>
          <NavLink
            to="/Login"
            className="hover:bg-zinc-200 p-1 rounded-full transition-all"
          >
            <FaRegUser className="text-[1.2rem]" />
          </NavLink>
        </div>
      </div>

      {/* منوی موبایل */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-zinc-200 py-4 px-5 space-y-4 animate-slideDown">
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className="block text-zinc-700 hover:text-black"
          >
            صفحه اصلی
          </NavLink>
          <NavLink
            to="/Bedspreads"
            onClick={() => setIsOpen(false)}
            className="block text-zinc-700 hover:text-black"
          >
            روتختی‌ها
          </NavLink>
          <NavLink
            to="/Mattresses"
            onClick={() => setIsOpen(false)}
            className="block text-zinc-700 hover:text-black"
          >
            تشک‌ها
          </NavLink>
          <NavLink
            to="/Pillows"
            onClick={() => setIsOpen(false)}
            className="block text-zinc-700 hover:text-black"
          >
            بالش‌ها
          </NavLink>
          <a
            href="#About"
            onClick={() => setIsOpen(false)}
            className="block text-zinc-700 hover:text-black"
          >
            درباره ما
          </a>

          <div className="flex items-center gap-4 border-t border-zinc-200 pt-3">
            <NavLink to="/Search" className="p-1">
              <LuSearch className="text-[1.3rem]" />
            </NavLink>
            <NavLink to="/Cart" className="p-1">
              <RiShoppingCartLine className="text-[1.3rem]" />
            </NavLink>
            <NavLink to="/Login" className="p-1">
              <FaRegUser className="text-[1.3rem]" />
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
}
