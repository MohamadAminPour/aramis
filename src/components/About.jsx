import { FaRegSmile } from "react-icons/fa";
import { GrAtm } from "react-icons/gr";
import { Ri24HoursFill } from "react-icons/ri";

export default function About() {
  return (
    <>
      <div
        id="About"
        className="mt-20 flex items-center justify-center py-3 flex-col"
      >
        <p className="text-[1.3rem]">درباره آرامیس</p>
        <p className="mb-10 text-zinc-500">
          بهترین ها را در کنار{" "}
          <span className="text-primary text-[1.4rem]">آرامیس</span> تجربه
          خواهید کرد چون...
        </p>
        <div className="w-[80%] grid grid-cols-3 gap-5">
          <div className="bg-primary3 p-5 rounded-lg">
            <GrAtm className="text-[1.6rem] text-primary" />
            <p className="my-2">پرداخت امن با درگاه امن</p>
            <p className="text-[.8rem] text-zinc-500">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است.
            </p>
          </div>
          <div className="bg-primary3 p-5 rounded-lg">
            <FaRegSmile className="text-[1.6rem] text-primary" />

            <p className="my-2">رضایت بیش از 1 میلیون مشتری</p>
            <p className="text-[.8rem] text-zinc-500">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است.
            </p>
          </div>
          <div className="bg-primary3 p-5 rounded-lg">
            <Ri24HoursFill className="text-[1.6rem] text-primary" />

            <p className="my-2">پشتیبانی 24 ساعته حضوری و آنلاین</p>
            <p className="text-[.8rem] text-zinc-500">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
