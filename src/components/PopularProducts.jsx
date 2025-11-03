import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { FaRegHeart } from "react-icons/fa";
import Product from "./Product";
import { products } from "../db.json";

export default function PopularProducts() {
  return (
    <section
      id="PopularProducts"
      className="flex flex-col items-center justify-center mt-24 py-5"
    >
      {/* عنوان بخش */}
      <div className="w-[90%] max-w-6xl flex items-center mb-4">
        <FaRegHeart className="bg-primary3 p-2 w-[2.5rem] h-[2.5rem] rounded-md ml-2" />
        <div>
          <p className="text-[1.3rem] font-semibold">محصولات جدید</p>
          <p className="text-[0.85rem] text-zinc-500">
            جدیدترین کالاهای آرامیس را مشاهده کنید!
          </p>
        </div>
      </div>

      {/* اسلایدر محصولات */}
      <div className="w-[90%] max-w-6xl">
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            // موبایل
            0: { slidesPerView: 1 },
            // تبلت
            768: { slidesPerView: 2 },
            // دسکتاپ
            1024: { slidesPerView: 4 },
          }}
          style={{ padding: "2rem 0" }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <Product product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
