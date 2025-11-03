import { GrArticle } from "react-icons/gr";
import ArticleItem from "./ArticleItem";

let articles = [
  {
    id: 1,
    title: "معایب استفاده از کالا های خواب نا مرغوب",
    subTitle:
      "  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    date: "1403/09/10",
    author: "علی محمدی",
    src: "../public/images/pillow6.png",
  },
  {
    id: 2,
    title: "معایب استفاده از کالا های خواب نا مرغوب",
    subTitle:
      "  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    date: "1403/08/03",
    author: "سارا کرمی",
    src: "../public/images/bed8.png",
  },
  {
    id: 3,
    title: "معایب استفاده از کالا های خواب نا مرغوب",
    subTitle:
      "  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    date: "1403/08/15",
    author: "حمید یوسفی",
    src: "../public/images/bed3.png",
  },
  {
    id: 4,
    title: "معایب استفاده از کالا های خواب نا مرغوب",
    subTitle:
      "  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    date: "1403/07/20",
    author: "کامران مولایی",
    src: "../public/images/pillow7.png",
  },
];

export default function Article() {
  return (
    <>
      <div className="flex items-center justify-center flex-col mt-20 py-3">
        <div className="w-[80%] mb-10 flex items-center">
          <GrArticle className="size-6 ml-2 bg-primary3 p-2 w-[2.5rem] h-[2.5rem] rounded-md" />
          <div>
            <p className="text-[1.3rem]">وبلاگ آموزشی آرامیس</p>
            <p className="text-[.7rem] text-zinc-500">
              با خواندن مقاله های آرامیس به دانش خود بیافزایید !
            </p>
          </div>
        </div>
        <ul className="w-[80%] mb-10 grid grid-cols-4 gap-3">
          {articles.map((article) => (
            <ArticleItem article={article} key={article.id} />
          ))}
        </ul>
      </div>
    </>
  );
}