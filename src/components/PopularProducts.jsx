import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Product from "./Product";
import { Autoplay } from "swiper/modules";
import { FaRegHeart } from "react-icons/fa";
import { products } from "../db.json";


export default function PopularProducts() {
  return (
    <>
      <div
        id="PopularProducts"
        className="flex items-center justify-center flex-col mt-24 py-3"
      >
        <div className="w-[80%] flex items-center">
        <FaRegHeart className="size-6 ml-2 bg-primary3 p-2 w-[2.5rem] h-[2.5rem] rounded-md" />


          <div>
            <p className="text-[1.3rem]">محصولات جدید</p>
            <p className="text-[.8rem] text-zinc-500">
              جدید ترین کالا های آرامیس را مشاهده کنید !
            </p>
          </div>
        </div>
        <div className="w-[80%]">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={4}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            style={{padding:'2rem 0'}}
            loop={true}
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <Product product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}
