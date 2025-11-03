import Menu from "../components/Menu";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { HiShieldCheck } from "react-icons/hi";
import Footer from "../components/Footer";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { BsQuestionSquareFill, BsSortDownAlt } from "react-icons/bs";
import { useEffect, useState } from "react";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { products } from "../db.json";

let infoDatas = [
  { id: 1, name: "عرض", value: "85 سانتی متر" },
  { id: 2, name: "ارتفاع", value: "70 سانتی متر" },
  { id: 3, name: "وزن", value: "50 کیلوگرم" },
  { id: 4, name: "جنس روکش", value: "پارچه" },
  { id: 5, name: "جنس کلاف", value: "چوب" },
  { id: 6, name: "تراکم اسفنچ", value: "3/5 کیلویی" },
  { id: 7, name: "وزن قابل تحمل", value: "150 کیلوگرم" },
  { id: 8, name: "ارتفاع پایه تا نشیمنگاه", value: "40 سانتی متر" },
  { id: 9, name: "عمق نشیمنگاه", value: "65 سانتی متر" },
];

export default function Products() {
  let productID = useParams().ProductsId;
  const product = products.find((p) => p.id == productID);
 

  useEffect(()=>{
     window.scrollTo(0,0)
  },[])

  const [count, setCount] = useState(1);
  const [tab, setTab] = useState(1);
  const [length, setLength] = useState(0);

  const limitTextLength = 1000;

  function limitLength(ev) {
    length !== limitTextLength && setLength(ev);
  }

  function changeTab(val) {
    setTab(val);
  }

  function addCount() {
    setCount(count + 1);
  }

  function delCount() {
    count !== 1 && setCount(count - 1);
  }

  return (
    <>
      <Menu />

      {/* بخش اصلی محصول */}
      <div className="flex justify-center py-10 px-3 ">
        <div className="w-[95%] py-5 flex flex-col lg:flex-row gap-5">
          {/* تصویر */}
          <div className="w-full lg:w-[40%] h-[28rem] lg:h-[28rem]">
            <img
              src={product.src}
              alt=""
              className="w-full h-full rounded-lg object-cover"
            />
          </div>

          {/* اطلاعات محصول */}
          <div className="w-full lg:w-[60%] flex flex-col gap-5">
            <p className="text-[1.5rem] font-semibold">{product.title}</p>

            {/* شناسه و برچسب */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-[.8rem] text-zinc-500">
              <p>
                شناسه کالا : <span className="text-zinc-950">12457829</span>
              </p>
              <p>
                برچسب : <span className="text-blue-400">طبی</span>
              </p>
            </div>

            {/* ویژگی‌ها */}
            <div>
              <p className="flex items-center gap-2 mb-2">
                <span className="ml-2 bg-blue-500 w-[.8rem] h-[.8rem] rounded-sm">&nbsp;</span>
                ویژگی های محصول
              </p>
              <ul className="text-zinc-500 text-[.9rem] ml-5">
                <li>جنس : <span>ژاکارد</span></li>
                <li>الیاف داخلی : <span>اسفنج</span></li>
                <li>اندازه : <span>یک نفره</span></li>
              </ul>
            </div>

            {/* انتخاب رنگ */}
            <div>
              <p className="flex items-center gap-2 mb-2">
                <span className="ml-2 bg-blue-500 w-[.8rem] h-[.8rem] rounded-sm">&nbsp;</span>
                انتخاب رنگ
              </p>
              <ul className="flex flex-wrap gap-3">
                <li className="flex items-center justify-center bg-blue-100 py-1 px-6 border-blue-300 border-2 rounded-full cursor-pointer">
                  <span className="ml-2 bg-blue-500 w-[.8rem] h-[.8rem] rounded-sm">&nbsp;</span>آبی
                </li>
                <li className="flex items-center justify-center bg-orange-100 py-1 px-6 border-orange-300 border-2 rounded-full cursor-pointer">
                  <span className="ml-2 bg-orange-500 w-[.8rem] h-[.8rem] rounded-sm">&nbsp;</span>نارنجی
                </li>
                <li className="flex items-center justify-center bg-green-100 py-1 px-6 border-green-300 border-2 rounded-full cursor-pointer">
                  <span className="ml-2 bg-green-500 w-[.8rem] h-[.8rem] rounded-sm">&nbsp;</span>سبز
                </li>
              </ul>
            </div>

            {/* دکمه افزودن به سبد خرید */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mt-5">
              <button className="bg-primary p-3 rounded-md text-white text-[.9rem] px-16 hover:px-20 transition-all duration-200">
                افزودن به سبد خرید | {(count * product.price).toLocaleString()} تومان
              </button>
              <div className="flex items-center gap-3 mt-2 sm:mt-0">
                <button onClick={addCount} className="bg-zinc-200 w-[2rem] h-[2rem] rounded-md">+</button>
                <p className="w-[2rem] h-[2rem] flex items-center justify-center">{count}</p>
                <button onClick={delCount} className="bg-zinc-200 w-[2rem] h-[2rem] rounded-md">-</button>
              </div>
            </div>

            {/* سمت چپ اطلاعات */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 mt-5 lg:mt-0">
              <div className="flex items-center gap-3 text-zinc-500 text-[.9rem]">
                <p><span>7</span> دیدگاه</p>
                <span>|</span>
                <p>امتیاز : <span>4.5</span></p>
                <FaStar className="text-yellow-500 w-[1.8rem] h-[1.8rem] p-[.4rem] rounded-full bg-yellow-100"/>
              </div>
              <div className="flex items-center gap-3 text-zinc-500 text-[.9rem]">
                <p>ضمانت اصالت و کیفیت کالا</p>
                <HiShieldCheck className="text-blue-500 bg-blue-100 w-[1.8rem] h-[1.8rem] p-[.4rem] rounded-full"/>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* تب‌ها */}
      <ul className="bg-black flex flex-wrap justify-between text-white py-4 px-4 sm:px-10 gap-2">
        {[1,2,3,4].map((i)=>(
          <li key={i} onClick={()=>changeTab(i)} className="p-2 hover:text-primary cursor-pointer">
            <span className={tab==i ? "text-primary" : ""}>
              {i===1 && "معرفی"}
              {i===2 && "مشخصات"}
              {i===3 && "دیدگاه ها"}
              {i===4 && "پرسش و پاسخ"}
            </span>
          </li>
        ))}
      </ul>

      {/* محتوا تب‌ها */}
      <div className="mb-5 px-4 sm:px-10 py-5 flex flex-col gap-5">

        {/* معرفی */}
        {tab==1 && (
          <div>
            <p className="text-[1.5rem] mb-3">معرفی محصول</p>
            <p className="text-zinc-500 leading-7">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم ...
            </p>
          </div>
        )}

        {/* مشخصات */}
        {tab==2 && (
          <div>
            <p className="text-[1.5rem] mb-3">مشخصات محصول</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-2">
              {infoDatas.map((info)=>(
                <li key={info.id} className="flex justify-between">
                  <p>{info.name}</p> : <p className="text-zinc-500">{info.value}</p>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* دیدگاه‌ها */}
        {tab==3 && (
          <div className="flex flex-col sm:flex-row gap-5">
            {/* امتیاز کلی */}
            <div className="sm:w-[25%] flex flex-col gap-3">
              <p className="text-[1.4rem]">4.5 <span className="text-[.9rem] text-zinc-500">از 5</span></p>
              <div className="flex items-center gap-1">
                <FaRegStarHalfStroke className="text-yellow-500"/>
                <FaStar className="text-yellow-500"/>
                <FaStar className="text-yellow-500"/>
                <FaStar className="text-yellow-500"/>
                <FaStar className="text-yellow-500"/>
              </div>
              <p className="text-[.8rem] text-zinc-600">شما هم درباره این کالا دیدگاه ثبت کنید.</p>
              <button className="w-full text-[.9rem] border-primary border-[1.5px] py-2 rounded-lg text-primary hover:bg-primary hover:text-white transition-all">
                ثبت دیدگاه
              </button>
            </div>

            {/* لیست دیدگاه‌ها */}
            <div className="sm:w-[75%] flex flex-col gap-3">
              <div className="flex items-center mb-3">
                <BsSortDownAlt className="text-[1.3rem]"/>
                <p className="mr-2 text-[.9rem]">مرتب سازی :</p>
                <ul className="flex gap-3 text-[.9rem] text-zinc-500">
                  <li className="cursor-pointer text-primary">جدیدترین</li>
                  <li className="cursor-pointer">مفید ترین</li>
                  <li className="cursor-pointer">خریداران</li>
                </ul>
              </div>

              <ul className="flex flex-col gap-5">
                {/* نمونه دیدگاه */}
                <li className="border-b-2 border-zinc-200 py-3 relative">
                  <div className="flex items-center gap-3">
                    <p className="text-[.8rem] text-zinc-500">حسین وفایی</p>
                    <p className="text-[.7rem] text-red-600 bg-red-100 px-3 py-1 rounded-full">کاربر عادی</p>
                    <p className="text-[.8rem] text-zinc-500">7 ساعت پیش</p>
                  </div>
                  <div className="flex gap-1 mt-3">
                    {[...Array(5)].map((_,i)=><FaStar key={i} className="text-yellow-500"/>)}
                  </div>
                  <p className="mt-2 text-[.9rem] mb-5 leading-7">
                    لب تاپ بیسیکه...
                  </p>
                  <div className="flex gap-5 absolute bottom-1 left-0">
                    <button className="flex gap-2 text-zinc-500"><p>3</p><AiOutlineLike/></button>
                    <button className="flex gap-2 text-zinc-500"><p>1</p><AiOutlineDislike/></button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* پرسش و پاسخ */}
        {tab==4 && (
          <div className="flex flex-col gap-5">
            <p className="text-[1.5rem]">پرسش کاربران</p>
            <textarea
              rows={10}
              maxLength={limitTextLength}
              onChange={(e)=>limitLength(e.target.value.length)}
              className="border-zinc-500 border-[1px] p-3 outline-none rounded-md w-full"
              placeholder="پرسش شما..."
            ></textarea>
            <p className="text-[.7rem] text-zinc-500">{length} / {limitTextLength}</p>
            <button className="w-[15rem] py-2 rounded-lg bg-primary text-white hover:scale-[.9] transition-all">ارسال پرسش</button>

            <ul className="flex flex-col gap-3">
              <li className="flex flex-col gap-2 border-b-2 border-zinc-200 py-3">
                <div className="flex items-center gap-2">
                  <BsQuestionSquareFill className="text-primary"/>
                  <p>آیا تخت خواب تاشو هست ؟</p>
                </div>
                <ul className="flex flex-col gap-3">
                  <li className="flex flex-col gap-2">
                    <div className="flex items-start gap-3">
                      <p className="text-[.8rem] text-zinc-500">علی رحمانی</p>
                      <p className="text-[.7rem] text-red-600 bg-red-100 px-3 py-1 rounded-full">کاربر عادی</p>
                    </div>
                    <p className="text-zinc-700 text-[1rem]">بله تاشو هست...</p>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}
