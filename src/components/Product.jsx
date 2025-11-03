import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function Product({ product }) {
  return (
    <>
      <Link
        key={product.id}
        to={`Products/${product.id}`}
        className="p-4 rounded-lg bg-zinc-50 shadow-lg min-w-[18rem] hover:scale-105 inline-block"
      >
        <div className="">
          <img
            src={product.src}
            className="h-[15rem] md:h-[12rem] w-full rounded-md mb-3 object-cover"
            alt=""
          />
        </div>

        <div className="flex items-center justify-between">
          <NavLink
            to=""
            className="bg-primary3 px-4 py-[.1rem] rounded-lg text-[.7rem]"
          >
            {product.category}
          </NavLink>
        </div>

        <p className="mt-2 line-clamp-1">{product.title}</p>
        <p className="text-zinc-500 text-[.8rem] mt-2 line-clamp-2 text-justify">
          {product.subTitle}
        </p>

        <div className="flex items-end justify-between mt-3">
          <div>
            <s className="text-[.8rem] text-zinc-500">
              {product.price.toLocaleString()}
            </s>
            <p>
              {product.offer == 100
                ? "رایگان"
                : Math.abs(
                    (product.offer / 100) * product.price - product.price
                  ).toLocaleString() + " تومان "}
            </p>
          </div>

          <div className="flex items-center justify-center">
            <p className="ml-1">4.3</p>
            <FaStar className="size-6 fill-yellow-500" />
          </div>
        </div>
      </Link>
    </>
  );
}
