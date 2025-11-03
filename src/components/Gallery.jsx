export default function Gallery() {
  return (
    <>
      <div className="mt-20 flex items-center justify-center flex-col py-3">
        <p className="text-[1.3rem] mb-1">گالری آرامیس</p>
        <p className="text-zinc-500 text-[.9rem]">آرامیس خیالتو از یه خواب راحت تخت میکنه !</p>
        <div className="w-[100%] md:w-[80%] grid grid-cols-1 lg:grid-cols-2 gap-4 p-5 mt-3">
          <img src="../public/images/img1.png" className="w-[100%] h-[17rem] object-cover rounded-2xl" alt="" />
          <img src="../public/images/img2.png" className="w-[100%] h-[17rem] object-cover rounded-2xl" alt="" />
        </div>
      </div>
    </>
  );
}
