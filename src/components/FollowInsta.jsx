import { FaInstagram } from "react-icons/fa";

export default function FollowInsta() {
  return (
    <>
      <div
        className="flex items-center justify-center flex-col mt-4 py-3"
      >
        <div className="w-[90%] md:w-[80%] flex items-center justify-between text-white bg-black px-5 py-5 rounded-xl">
          <div>
            <p className="text-[.9rem]">اینستاگرام ما را دنبال کنید حتما !</p>
          </div>
          <a
            href="https://instagram.com/Aramis-Ofiical"
            target="_blank"
            className="flex items-center"
          >
            <p className="ml-2 text-[.9rem]">Aramis-Ofiical</p>
            <FaInstagram className="text-[1.3rem]" />
          </a>
        </div>
      </div>
    </>
  );
}
