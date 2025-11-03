import { NavLink } from "react-router-dom";

export default function CategoryItem({ Categories }) {
  return (
    <>
      {Categories.map((Category) => (
        <NavLink key={Category.id}
          to="/Search"
          className="relative catItem px-5 rounded-lg bg-primary3 flex items-center justify-between overflow-hidden"
        >
          <div className="bg-primary2 catOverlay duration-500 absolute h-full w-[5rem] left-0 rounded-tr-[1.9rem] rounded-br-[1.9rem]"></div>
          <div className="text-right">
            <p className="text-[1rem]">{Category.title}</p>
            <p className="text-[.8rem] text-zinc-500">{Category.subTitle}</p>
          </div>
          <img
            src={Category.src}
            className="w-[9rem] z-10"
            alt=""
          />
        </NavLink>
      ))}
    </>
  );
}
