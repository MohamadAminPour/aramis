import Menu from "../components/Menu";
import { useParams } from "react-router-dom";

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

export default function Weblog() {
  let articleID = useParams().ArticleId;
  const article = articles.find((article) => article.id == articleID);
  console.log(article);

  return (
    <div className="h-[100vh] flex items-center justify-center">
      <div className="contain w-[95%] h-[100vh]">
        <Menu />
      </div>
    </div>
  );
}
