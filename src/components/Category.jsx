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
    subTitle: "بیش از هزار مدل تشک",
    src: "../public/images/bed.png",
  },
  {
    id: 3,
    title: "پتو ها",
    subTitle: "بیش از هزار مدل تشک",
    src: "../public/images/bed.png",
  },
  {
    id: 4,
    title: "رو مبلی",
    subTitle: "بیش از هزار مدل تشک",
    src: "../public/images/bed.png",
  },
  {
    id: 5,
    title: "لحاف ها",
    subTitle: "بیش از هزار مدل تشک",
    src: "../public/images/bed.png",
  },
  {
    id: 6,
    title: "بالش مبل",
    subTitle: "بیش از هزار مدل تشک",
    src: "../public/images/bed.png",
  },
];

export default function Category() {
  return (
    <>
      <div id="Category" className="text-center mt-20 flex items-center justify-center py-3">
        <div className="w-[80%]">
          <p className="border-2 border-primary bg-primary3 text-[.9rem] text-zinc-600 px-7 py-1 inline-block rounded-full">
            دسته بندی محصولات
          </p>

          <ul className="mt-5 grid grid-cols-3 gap-5">
            <CategoryItem Categories={Categories} />
          </ul>
        </div>
      </div>
    </>
  );
}
