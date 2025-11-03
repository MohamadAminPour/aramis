import { FaArrowLeft, FaCreditCard } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";
import { IoChevronDown } from "react-icons/io5";
import { MdSupportAgent } from "react-icons/md";

export default function Header() {
  return (
    <>
      <div className="header mt-[6rem] flex items-center justify-center flex-col">
        <h1 className="text-[2.5rem] md:text-[4.5rem] text-center font-hezargan">
          خواب راحت و آسوده با آرامیس
        </h1>
        <p className="text-center px-10 text-zinc-500 mb-5">
          وارد کننده بهترین کالا های خواب از کشور های معتبر در سراسر جهان !
        </p>
        <a
          href="#NewProducts"
          className="headerSeeProduct bg-primary px-5 py-2 rounded-md text-[.8rem] text-white flex items-center justify-center"
        >
          مشاهده محصولات
          <FaArrowLeft className="mr-2" />
        </a>
        <div className="flex items-center justify-center flex-col mt-10 relative">
          <img
            src="/images/hiro.png"
            alt=""
            className="w-[80%] h-[80%] object-cover"
          />

          <ul className="w-full grid grid-cols-2 lg:grid-cols-3 gap-3 px-4 static md:absolute -bottom-[70%] md:bottom-[5%]">
            {/* کارت ۱ */}
            <li className="flex items-center rounded-md py-2 px-2 bg-black">
              <FaCreditCard className="bg-slate-700 text-white w-[2.7rem] h-[2.7rem] p-2 rounded-md" />
              <div className="mr-2">
                <p className="text-slate-200 text-[.9rem]">پرداخت آسان</p>
                <span className="text-zinc-500 text-[.8rem]">
                پرداخت در کمترین زمان
                </span>
              </div>
            </li>

            {/* کارت ۲ */}
            <li className="flex items-center rounded-md py-2 px-2 bg-black">
              <FaTruckFast className="bg-slate-700 text-white w-[2.7rem] h-[2.7rem] p-2 rounded-md" />
              <div className="mr-2">
                <p className="text-slate-200 text-[.9rem]">ارسال به موقع</p>
                <span className="text-zinc-500 text-[.7rem]">
                  ارسال در کمترین زمان
                </span>
              </div>
            </li>

            {/* کارت ۳ */}
            <li className="flex items-center rounded-md py-2 px-2 bg-black col-span-2 lg:col-span-1">
              <MdSupportAgent className="bg-slate-700 text-white w-[2.7rem] h-[2.7rem] p-2 rounded-md" />
              <div className="mr-2">
                <p className="text-slate-200 text-[.9rem]">پشتیبانی آنلاین</p>
                <span className="text-zinc-500 text-[.7rem]">
                  جواب گوی سوالات شما هستیم
                </span>
              </div>
            </li>
          </ul>
        </div>
        <a href="#Category" className="mt-10 animate-bounce">
          <IoChevronDown className="2rem" />
        </a>
      </div>
    </>
  );
}
