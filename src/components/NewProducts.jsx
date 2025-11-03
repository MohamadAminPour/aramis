import { HiOutlineSpeakerphone } from "react-icons/hi";
import Product from "./Product";
import { products } from "../db.json";

export default function NewProducts() {

  return (
    <>
      <div
        id="NewProducts"
        className="flex items-center justify-center flex-col py-[5rem]"
      >
        <div className="w-[80%] mb-10 flex items-center">
          <HiOutlineSpeakerphone className="size-6 ml-2 bg-primary3 p-2 w-[2.5rem] h-[2.5rem] rounded-md" />

          <div>
            <p className="text-[1.3rem]">محصولات جدید</p>
            <p className="text-[.7rem] text-zinc-500">
              جدید ترین کالا های آرامیس را مشاهده کنید !
            </p>
          </div>
        </div>
        <ul className="w-[90%] md:w-[80%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {products.map((product) => (
            <Product product={product} key={product.id} />
          ))}
        </ul>
      </div>
    </>
  );
}
