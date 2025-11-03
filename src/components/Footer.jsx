import { BiLogoTelegram } from "react-icons/bi";
import { FaPhoneFlip } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="bg-zinc-800 py-5 flex items-start justify-center">
        <div className="w-[80%]">
          {/*top*/}
          <div className="">
            <div className="menu-logo flex items-center mb-3">
              <img
                src="../public/images/logo.png"
                alt=""
                className="w-14 ml-2"
              />
              <p className="font-hezargan text-[3rem] text-white">آرامیس</p>
            </div>
            <div className="text-white flex items-center gap-10">
              <div className="flex items-center gap-2">
                <FiPhone className="text-[1.2rem]" />
                <p>09156740012</p>
              </div>
              <div className="flex items-center gap-2">
                <HiOutlineMail className="text-[1.2rem]" />
                <p>aramis@gmail.com</p>
              </div>
              <div className="flex items-center gap-2">
                <BiLogoTelegram className="text-[1.2rem]" />
                <p>@aramis_channel</p>
              </div>
            </div>
          </div>

          <hr className="my-5" />

          {/*down*/}
          <div className="flex items-center justify-between">
            <div className="">
              <p className="text-[1.5rem] text-white text-right">درباره آرامیس</p>
              <p className="text-[1rem] text-zinc-500 mt-2 text-justify w-[25rem]">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است.لورم ایپسوم متن ساختگی با تولید
                سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
              </p>
            </div>

            <div>
              <p className="text-[1.5rem] text-white mb-3">دسترسی سریع</p>
              <ul className="text-[1rem] text-zinc-500 ">
                <li>
                  <NavLink>خانه</NavLink>
                </li>
                <li>
                  <NavLink>سبد خرید</NavLink>
                </li>
                <li>
                  <NavLink>ورود</NavLink>
                </li>
                <li>
                  <NavLink>جستجو</NavLink>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-[1.5rem] text-white mb-3">محصولات ما</p>
              <ul className="text-[1rem] text-zinc-500">
                <li>
                  <NavLink>تشک ها</NavLink>
                </li>
                <li>
                  <NavLink>مبل ها</NavLink>
                </li>
                <li>
                  <NavLink>روتختی ها</NavLink>
                </li>
                <li>
                  <NavLink>بالش ها</NavLink>
                </li>
              </ul>
            </div>

            <div>
              <img src="../public/images/اینماد.jpg" alt="" className="rounded-lg w-[10rem]" />
            </div>

          </div>
        </div>
      </footer>
    </>
  );
}
