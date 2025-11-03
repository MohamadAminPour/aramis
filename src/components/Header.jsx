import { FaArrowLeft, FaCreditCard } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";
import { IoChevronDown } from "react-icons/io5";
import { MdSupportAgent } from "react-icons/md";

export default function Header() {
  return (
    <>
      <div className="header mt-10 flex items-center justify-center flex-col">
        <h1 className="text-[4.5rem] text-center font-hezargan">
          خواب راحت و آسوده با آرامیس
        </h1>
        <p className="text-center text-zinc-500 mb-5">
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
            src="../public/images/hiro.png"
            alt=""
            className="w-[80%] h-[80%] object-cover"
          />

          <div className="w-[100%] bg-black absolute bottom-[5%] rounded-xl flex items-center justify-between px-4">
            <div className="flex items-center justify-center rounded-md p-4">
              <FaCreditCard className="size-6 bg-slate-700 text-white w-[2.7rem] h-[2.7rem] p-2 rounded-md" />

              <div className="mr-2">
                <p className="text-slate-200 text-[.9rem]">پرداخت آسان</p>
                <span className="text-zinc-500 text-[.8rem]">
                  پرداخت سریع و امن در 1 دقیقه
                </span>
              </div>
            </div>
            <div className="flex items-center justify-center rounded-md p-1">
              <FaTruckFast className="size-6 bg-slate-700 text-white w-[2.7rem] h-[2.7rem] p-2 rounded-md" />

              <div className="mr-2">
                <p className="text-slate-200 text-[.9rem]">ارسال به موقع</p>
                <span className="text-zinc-500 text-[.7rem]">
                  در عرض سه روز محصول به دستتان می رسد
                </span>
              </div>
            </div>
            <div className="flex items-center justify-center rounded-md p-1">
              <MdSupportAgent className="size-6 bg-slate-700 text-white w-[2.7rem] h-[2.7rem] p-2 rounded-md" />

              <div className="mr-2">
                <p className="text-slate-200 text-[.9rem]">پشتیبانی آنلاین</p>
                <span className="text-zinc-500 text-[.7rem]">
                  جواب گوی سوالات شما هستیم
                </span>
              </div>
            </div>
          </div>
        </div>
        <a href="#Category" className="mt-3">
          <IoChevronDown />
        </a>
      </div>
    </>
  );
}
