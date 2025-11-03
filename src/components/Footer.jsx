import { BiLogoTelegram } from "react-icons/bi";
import { FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-zinc-800 py-8 flex justify-center">
      <div className="w-[90%] max-w-6xl">
        {/* بالایی */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center">
            <img
              src="/images/logo.png"
              alt="آرامیس"
              className="w-14 ml-3"
            />
            <p className="font-hezargan text-[2rem] md:text-[2.5rem] text-white">
              آرامیس
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8 text-white">
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

        <hr className="my-6 border-zinc-700" />

        {/* پایینی */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* درباره ما */}
          <div>
            <p className="text-[1.3rem] text-white mb-3">درباره آرامیس</p>
            <p className="text-[0.95rem] text-zinc-400 text-justify leading-6">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. لورم ایپسوم متن ساختگی با تولید
              سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
            </p>
          </div>

          {/* دسترسی سریع */}
          <div>
            <p className="text-[1.3rem] text-white mb-3">دسترسی سریع</p>
            <ul className="space-y-2 text-zinc-400">
              <li><NavLink to="/">خانه</NavLink></li>
              <li><NavLink to="/Cart">سبد خرید</NavLink></li>
              <li><NavLink to="/Login">ورود</NavLink></li>
              <li><NavLink to="/Search">جستجو</NavLink></li>
            </ul>
          </div>

          {/* محصولات ما */}
          <div>
            <p className="text-[1.3rem] text-white mb-3">محصولات ما</p>
            <ul className="space-y-2 text-zinc-400">
              <li><NavLink to="/Mattresses">تشک‌ها</NavLink></li>
              <li><NavLink to="/Sofas">مبل‌ها</NavLink></li>
              <li><NavLink to="/Bedspreads">روتختی‌ها</NavLink></li>
              <li><NavLink to="/Pillows">بالش‌ها</NavLink></li>
            </ul>
          </div>

          {/* نماد اعتماد */}
          <div className="flex md:justify-end">
            <img
              src="/images/اینماد.jpg"
              alt="نماد اعتماد"
              className="rounded-lg w-[8rem] sm:w-[10rem] mx-auto md:mx-0"
            />
          </div>
        </div>

        <hr className="my-6 border-zinc-700" />

        {/* کپی‌رایت */}
        <p className="text-center text-zinc-500 text-sm">
          © {new Date().getFullYear()} تمامی حقوق برای آرامیس محفوظ است.
        </p>
      </div>
    </footer>
  );
}
