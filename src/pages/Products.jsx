import Menu from "../components/Menu";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { HiShieldCheck } from "react-icons/hi";
import Footer from "../components/Footer";
import { GoInfo } from "react-icons/go";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import {
  BsQuestionSquare,
  BsQuestionSquareFill,
  BsSortDownAlt,
} from "react-icons/bs";
import { useState } from "react";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { Link } from "react-router-dom";
import { MdKeyboardArrowLeft } from "react-icons/md";
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

  const product = products.find((product) => product.id == productID);
  console.log(product);

  const [count, setCount] = useState(1);
  const [tab, setTab] = useState(1);
  const [length, setLegth] = useState(0);

  let limitTextLength = 1000;
  function limitLength(ev) {
    length != limitLength && setLegth(ev);
  }

  function changeTab(val) {
    setTab(val);
  }

  function addCount() {
    setCount(count + 1);
  }

  function delCount() {
    count != 1 && setCount(count - 1);
  }

  return (
    <>
      <Menu />

      <div className="flex justify-center my-10">
        <div className="contain w-[95%] h-[28rem] py-5 flex gap-5">
          <div className="w-[40%]">
            <img
              src={product.src}
              alt=""
              className="w-[100%] h-[100%] rounded-lg object-cover"
            />
          </div>
          <div className="w-[60%]">
            <p className="text-[1.5rem]">{product.title}</p>
            {/* contents */}
            <div className="flex items-atsrt justify-between mt-3">
              {/* content right */}
              <div className="flex items-start flex-col">
                <div className="flex items-start justify-center gap-5 text-[.8rem]">
                  <p className="text-zinc-500">
                    شناسه کالا : <span className="text-zinc-950">12457829</span>
                  </p>
                  <p className="text-zinc-500">
                    برچسب : <span className="text-blue-400">طبی</span>
                  </p>
                </div>

                <div className="mt-5 flex items-center justify-center mb-3">
                  <p className="ml-2 bg-blue-500 rounded-sm w-[.8rem] h-[.8rem]">
                    &nbsp;
                  </p>
                  <p>ویژگی های محصول</p>
                </div>

                <ul className="mr-9 list-disc text-zinc-500 text-[.9rem]">
                  <li className="mb-2">
                    جنس : <span>ژاکارد</span>
                  </li>
                  <li className="mb-2">
                    الیاف داخلی : <span>اسفنج</span>
                  </li>
                  <li className="mb-2">
                    اندازه : <span>یک نفره</span>
                  </li>
                </ul>

                <div className="mt-5 flex items-center justify-center mb-3">
                  <p className="ml-2 bg-blue-500 rounded-sm w-[.8rem] h-[.8rem]">
                    &nbsp;
                  </p>
                  <p>انتخاب رنگ</p>
                </div>

                <ul className="mt-5 flex items-center justify-center mb-3 gap-3">
                  <li className="flex items-center justify-center bg-blue-100 py-1 px-6 border-blue-300 border-2 rounded-full cursor-pointer">
                    <p className="ml-2 bg-blue-500 rounded-sm w-[.8rem] h-[.8rem]">
                      &nbsp;
                    </p>
                    <p>آبی</p>
                  </li>
                  <li className="flex items-center justify-center bg-orange-100 py-1 px-6 border-orange-300 border-2 rounded-full cursor-pointer">
                    <p className="ml-2 bg-orange-500 rounded-sm w-[.8rem] h-[.8rem]">
                      &nbsp;
                    </p>
                    <p>نارنجی</p>
                  </li>
                  <li className="flex items-center justify-center bg-green-100 py-1 px-6 border-green-300 border-2 rounded-full cursor-pointer">
                    <p className="ml-2 bg-green-500 rounded-sm w-[.8rem] h-[.8rem]">
                      &nbsp;
                    </p>
                    <p>سبز</p>
                  </li>
                </ul>

                <div className="mt-7 flex items-center justify-cente">
                  <button className="bg-primary p-3 rounded-md text-white text-[.9rem] px-16 hover:px-20">
                    افزودن به سبد خرید |{" "}
                    {(count * product.price).toLocaleString()} تومان
                  </button>
                  <div className="flex items-center justify-center gap-3 mr-5">
                    <button
                      onClick={addCount}
                      className="bg-zinc-200 w-[2rem] h-[2rem] rounded-md"
                    >
                      +
                    </button>
                    <p className="w-[2rem] h-[2rem] flex items-center justify-center">
                      {count}
                    </p>
                    <button
                      onClick={delCount}
                      className="bg-zinc-200 w-[2rem] h-[2rem] rounded-md"
                    >
                      -
                    </button>
                  </div>
                </div>
              </div>

              {/* content left */}
              <div className="flex items-end flex-col">
                <div className="flex items-center justify-center gap-3 text-zinc-500 text-[.9rem] mb-3">
                  <p>
                    <span>7</span> دیدگاه{" "}
                  </p>
                  <span>|</span>
                  <p>
                    امتیاز : <span>4.5</span>
                  </p>
                  <FaStar className="text-yellow-500 bg-yellow-100 w-[1.8rem] h-[1.8rem] p-[.4rem] rounded-full" />
                </div>
                <div className="flex items-center justify-center gap-3 text-zinc-500 text-[.9rem]">
                  <p>ضمانت اصالت و کیفیت کالا</p>
                  <HiShieldCheck className="text-blue-500 bg-blue-100 w-[1.8rem] h-[1.8rem] p-[.4rem] rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ul className="bg-black flex items-center justify-between text-white py-4 px-10">
        <li
          onClick={() => changeTab(1)}
          className="p-2 hover:text-primary cursor-pointer"
        >
          <span className={tab == 1 && "text-primary"}>معرفی</span>
        </li>
        <li
          onClick={() => changeTab(2)}
          className="p-2 hover:text-primary cursor-pointer"
        >
          <span className={tab == 2 && "text-primary"}>مشخصات</span>
        </li>
        <li
          onClick={() => changeTab(3)}
          className="p-2 hover:text-primary cursor-pointer"
        >
          <span className={tab == 3 && "text-primary"}>دیدگاه ها</span>
        </li>
        <li
          onClick={() => changeTab(4)}
          className="p-2 hover:text-primary cursor-pointer"
        >
          <span className={tab == 4 && "text-primary"}>پرسش و پاسخ</span>
        </li>
      </ul>

      <div className="mb-5 px-10 py-5">
        {tab == 1 && (
          <div className="intro">
            <p className="text-[1.5rem]">معرفی محصول</p>
            <p className="text-zinc-500 mt-5 leading-10">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها 🖨️ و متون بلکه روزنامه و
              مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی
              مورد 🔥 نیاز و کاربردهای متنوع با هدف بهبود 💹 ابزارهای کاربردی می
              باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت
              فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری
              را برای طراحان رایانه ای علی الخصوص طراحان خلاقی ❤️ و فرهنگ پیشرو
              در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و
              دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد 🚀
              وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات
              پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. ❤️
              <br />
              <br />
              وقتی ثروت‌ 💰 های بزرگ به دست برخی مردم می‌افتد در پرتو آن نیرومند
              می‌شوند 💪 و در سایهٔ نیرومندی و ثروت خیال می‌ کنند که می‌توانند
              در خارج از وطن خود زندگی نمایند و خوشبخت و سرافراز باشند ولی به
              زودی می‌ فهمند که اشتباه کرده‌ اند و عظمت هر ملتی بر روی خرابه‌
              های وطن خودش می‌باشد و بس!
              <br />
              <br />
              هر نفسی 😉 که فرو می‌ بریم، مرگی را که مدام به ما دست‌ اندازی
              می‌کند پس می‌زند... در نهایت این مرگ است که باید پیروز شود، زیرا
              از هنگام تولد بخشی از سرنوشت ما ❤️ شده و فقط مدت کوتاهی پیش از
              بلعیدن طعمه اش، با آن بازی می کند. با این همه، ما تا آنجا که ممکن
              است، با علاقه فراوان و دلواپسی زیاد به زندگی ادامه ✔️ می دهیم،
              همان‌ طور که تا آنجا که ممکن است طولانی‌ تر در یک حباب صابون می‌
              دمیم تا بزرگتر 🚀 شود، گر چه با قطعیتی تمام می‌ دانیم که خواهد
              ترکید.
            </p>
          </div>
        )}

        {tab == 2 && (
          <div className="info">
            <p className="text-[1.5rem]">مشخصات محصول</p>
            <ul className="grid grid-cols-2 gap-5 mt-5">
              {infoDatas.map((info) => (
                <li className="list-none flex mt-3">
                  <p>{info.name}</p>
                  <span>&nbsp; : &nbsp;</span>
                  <p className="text-zinc-500">{info.value}</p>
                </li>
              ))}
            </ul>
          </div>
        )}

        {tab == 3 && (
          <div className="comments">
            <p className="text-[1.5rem]">دیدگاه های کاربران</p>

            <div className="flex items-start mt-5 gap-10">
              {/* comment right */}
              <div className="w-[20%]">
                <p className="text-[1.4rem]">
                  4.5 <span className="text-[.9rem] text-zinc-500"> از 5</span>
                </p>
                <div className="flex items-center mt-3">
                  <FaRegStarHalfStroke className="text-yellow-500 text-[1.2rem]" />
                  <FaStar className="text-yellow-500 text-[1.2rem]" />
                  <FaStar className="text-yellow-500 text-[1.2rem]" />
                  <FaStar className="text-yellow-500 text-[1.2rem]" />
                  <FaStar className="text-yellow-500 text-[1.2rem]" />
                  <p className="text-[.7rem] text-zinc-500 mr-2">
                    از مجموع 39 امتیاز
                  </p>
                </div>
                <p className="text-[.8rem] text-zinc-600 mt-3">
                  شما هم درباره این کالا دیدگاه ثبت کنید.
                </p>
                <button className="w-[15rem] text-[.9rem] text-primary border-primary border-[1.5px] py-2 mt-5 rounded-lg hover:bg-primary hover:text-white">
                  ثبت دیدگاه
                </button>
                <div className="flex items-start mt-3">
                  <GoInfo />
                  <p className="text-[.8rem] text-zinc-500 mr-2 w-[15rem]">
                    با ثبت دیدگاه بر روی کالاهای خریداری شده ۵ امتیاز در
                    دیجی‌کلاب دریافت کنید
                  </p>
                </div>
              </div>

              {/* comment left */}
              <div className="w-[80%]">
                {/* empty comments */}
                {/* <div className="">
                  <p>شما هم می‌توانید در مورد این کالا نظر دهید.</p>
                  <p className="text-zinc-500 text-[.9rem] mt-3">
                    اگر این محصول را قبلا از دیجیکالا خریده باشید، دیدگاه شما به
                    عنوان خریدار ثبت خواهد شد. همچنین در صورت تمایل می‌توانید به
                    صورت ناشناس نیز دیدگاه خود را ثبت کنید
                  </p>
                </div> */}

                {/* comment content */}
                <div className="flex items-start flex-col">
                  {/* filter */}
                  <div className="flex items-center mb-5">
                    <BsSortDownAlt className="text-[1.3rem]" />
                    <p className="mr-2 text-[.9rem]">مرتب سازی : </p>
                    <ul className="flex items-center mr-3 gap-3 text-[.9rem] text-zinc-500">
                      <li className="cursor-pointer text-primary">جدیدترین</li>
                      <li className="cursor-pointer ">مفید ترین</li>
                      <li className="cursor-pointer ">خریداران</li>
                    </ul>
                  </div>

                  {/* comments */}
                  <ul className="w-[100%]">
                    <hr className="bg-zinc-200 h-[1.5px]" />
                    <li className="relative border-b-2 w-[100%] border-zinc-200 py-3">
                      <div className="flex items-center gap-3">
                        <p className="text-[.8rem] text-zinc-500">حسین وفایی</p>

                        <div className="">
                          {/* <p className="text-[.7rem] rounded-full text-center px-4 py-1 text-green-600 bg-green-100 block">خریدار</p> */}
                          <p className="text-[.7rem] rounded-full text-center px-4 py-1 text-red-600 bg-red-100 block">
                            کاربر عادی
                          </p>
                        </div>

                        <p className="text-[.8rem] text-zinc-500">7 ساعت پیش</p>
                      </div>
                      <div className="flex items-center mt-5">
                        <FaStar className="text-yellow-500" />
                        <FaStar className="text-yellow-500" />
                        <FaStar className="text-yellow-500" />
                        <FaStar className="text-yellow-500" />
                        <FaStar className="text-yellow-500" />
                      </div>
                      <p className="mt-2 text-[.9rem] mb-5 leading-7">
                        لب تاپ بیسیکه. ویندوز و درایورها هم خودمون باید روش نصب
                        کنیم. اگه روش نصب بود بهتر بود. هزینه اش هم میکشیدین رو
                        لب تاپ. اینجوری باید در به در مغازه ها بشیم که واسمون
                        ویندوز نصب کنن. تازه خیلی از خدمات کامپیوتری ها چون از
                        خودشون خرید نکردیم انجام نمیدن
                      </p>
                      <div className="flex items-center gap-5 mt-3 absolute bottom-1 left-0">
                        <button className="flex items-center gap-2 text-zinc-500">
                          <p>3</p>
                          <AiOutlineLike />
                        </button>
                        <button className="flex items-center gap-2 text-zinc-500">
                          <p>1</p>
                          <AiOutlineDislike />
                        </button>
                      </div>
                    </li>
                    <li className="relative border-b-2 w-[100%] border-zinc-200 py-3">
                      <div className="flex items-center gap-3">
                        <p className="text-[.8rem] text-zinc-500">
                          محمد امین پور
                        </p>

                        <div className="">
                          <p className="text-[.7rem] rounded-full text-center px-4 py-1 text-green-600 bg-green-100 block">
                            خریدار
                          </p>
                          {/* <p className="text-[.7rem] rounded-full text-center px-4 py-1 text-red-600 bg-red-100 block">
                         کاربر عادی
                       </p> */}
                        </div>

                        <p className="text-[.8rem] text-zinc-500">3 روز پیش</p>
                      </div>
                      <div className="flex items-center mt-5">
                        <FaStar className="text-yellow-500" />
                        <FaStar className="text-yellow-500" />
                        <FaStar className="text-yellow-500" />
                        <FaStar className="text-yellow-500" />
                        <FaStar className="text-yellow-500" />
                      </div>
                      <p className="mt-2 text-[.9rem] mb-5">
                        اینجوری باید در به در مغازه ها بشیم که واسمون ویندوز نصب
                        کنن. تازه خیلی از خدمات کامپیوتری ها چون از خودشون خرید
                        نکردیم انجام نمیدن
                      </p>
                      <div className="flex items-center gap-5 mt-3 absolute bottom-1 left-0">
                        <button className="flex items-center gap-2 text-zinc-500">
                          <p>3</p>
                          <AiOutlineLike />
                        </button>
                        <button className="flex items-center gap-2 text-zinc-500">
                          <p>1</p>
                          <AiOutlineDislike />
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {tab == 4 && (
          <div className="questions">
            <p className="text-[1.5rem]">پرسش کاربران</p>

            <div className="mt-5">
              <p>درباره این کالا چه پرسشی دارید؟</p>
              <div className="my-3">
                <textarea
                  rows="10"
                  maxLength={limitTextLength}
                  onChange={(e) => limitLength(e.target.value.length)}
                  className=" border-zinc-500 border-[1px] p-3 outline-none rounded-md w-full"
                  placeholder="پرسش شما..."
                ></textarea>
                <p className="text-[.7rem] text-zinc-500">
                  {limitTextLength} / {length}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-[.9rem]">
                  ثبت پاسخ به معنی موافقت با{" "}
                  <Link to="" className="text-primary">
                    قوانین انتشار دیجی‌کالا
                  </Link>{" "}
                  است.
                </p>
                <button className="w-[15rem] text-[.9rem] border-[1.5px] py-2 rounded-lg bg-primary hover:scale-[.9] text-white">
                  ارسال پرسش
                </button>
              </div>
            </div>

            {/* question box */}
            <ul className="mt-5">
              <li className="flex items-start flex-col gap-2">
                <div className="flex items-center gap-2">
                  <BsQuestionSquareFill className="bg-text text-primary" />
                  <p>آیا تخت خواب تاشو هست ؟</p>
                </div>

                {/* replays*/}
                <ul className="w-full">
                  <li className="flex items-start flex-col gap-5 w-full py-3 border-zinc-200 border-b-2">
                    {/* replay btn if question is not empty*/}
                    <div className="flex items-start gap-5">
                      <p className="text-[.8rem] text-zinc-500">پاسخ</p>
                      <div className="">
                        <div className="flex items-start gap-3">
                          <p className="text-[.8rem] text-zinc-500">
                            علی رحمانی
                          </p>
                          <div>
                            {/* <p className="text-[.7rem] rounded-full text-center px-4 py-1 text-green-600 bg-green-100 block">خریدار</p> */}
                            <p className="text-[.7rem] rounded-full text-center px-4 py-1 text-red-600 bg-red-100 block">
                              کاربر عادی
                            </p>
                          </div>
                        </div>
                        <p className="text-[1rem] mt-2 text-zinc-700">
                          بله تاشو هست، و موقع تا شدن به مبل تبدیل میشود.
                        </p>
                      </div>
                    </div>

                    <hr />
                    {/* replay btn if question is empty*/}
                    <button className="flex items-end gap-1 text-primary">
                      <p>ثبت پاسخ</p>
                      <MdKeyboardArrowLeft className="text-[1.3rem]" />
                    </button>
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
