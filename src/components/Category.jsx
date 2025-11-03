import CategoryItem from "./CategoryItem";

let Categories = [
  {
    id: 1,
    title: "تشک ها",
    subTitle: "بیش از هزار مدل تشک",
    src: "../public/images/bed.png",
  },
  {
    id: 2,
    title: "بالش ها",
    subTitle: "بیش از هزار مدل بالش",
    src: "../public/images/pillow9.webp",
  },
  {
    id: 3,
    title: "پتو ها",
    subTitle: "بیش از هزار مدل پتو",
    src: "../public/images/patoo.webp",
  },
  {
    id: 4,
    title: "رو مبلی",
    subTitle: "بیش از هزار مدل رومبلی",
    src: "../public/images/romobli.webp",
  },
  {
    id: 5,
    title: "لحاف ها",
    subTitle: "بیش از هزار مدل لحاف",
    src: "../public/images/lahaf.webp",
  },
  {
    id: 6,
    title: "بالش مبل",
    subTitle: "بیش از هزار مدل بالش مبل",
    src: "../public/images/kosan.webp",
  },
];

export default function Category() {
  return (
    <>
      <div id="Category" className="text-center mt-10 flex items-center justify-center py-[5rem]">
        <div className="w-[90%] md:w-[80%]">
          <p className="border-2 border-primary bg-primary3 text-[.9rem] text-zinc-600 px-7 py-1 inline-block rounded-full">
            دسته بندی محصولات
          </p>

          <ul className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <CategoryItem Categories={Categories} />
          </ul>
        </div>
      </div>
    </>
  );
}
