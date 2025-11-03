import { FaRegUser } from "react-icons/fa";
import { FiCalendar } from "react-icons/fi";
import { NavLink } from "react-router-dom";

export default function ArticleItem({article}) {
    return (
      <>
        <li className="bg-zinc-50 shadow-lg rounded-lg p-5">
            <div>
              <img
                src={article.src}
                alt=""
                className="w-full h-[10rem] mb-3 rounded-lg object-cover"
              />
            </div>
            <div>
              <p className="line-clamp-2">
              {article.title}
              </p>
              <p className="text-zinc-500 text-[.8rem] my-2 line-clamp-3 text-justify">{article.subTitle}</p>
              <div className="flex items-center justify-between mt-3">
                <p className="flex items-center justify-center gap-2 text-[.8rem] text-zinc-500 ">
                  <FaRegUser /> {article.author}
                </p>
                <p className="flex items-center justify-center gap-2 text-[.8rem] text-zinc-500 ">
                  <FiCalendar />
                  {article.date}
                </p>
              </div>
              <hr className="my-3" />
              <NavLink to={`Weblog/${article.id}`} className="text-center text-[.9rem] w-full inline-block hover:text-primary transition-all duration-300">
                مطالعه مقاله
              </NavLink>
            </div>
          </li>
      </>
    );
  }
  