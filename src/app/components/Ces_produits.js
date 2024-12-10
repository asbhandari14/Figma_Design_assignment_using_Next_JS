"use client";

import Image from "next/image";
import article_similarity_icon from "../../../public/article_similarity_icon.png";
import Link from "next/link";

export function Ces_produits() {
  return (
    <div className="bg-white p-6 flex flex-col gap-[30px]">
      <div className="w-full flex max-lg:flex-col justify-between items-center">
        <h2 className="mb-6 font-[500] text-[35px] max-md:text-[28px] leading-[43.4px] text-center"> Ces produits pourraient vous intéresser</h2>
        <Link href="#" className="font_Cabinet_Grotesk font-[500] text-[16px] max-md:text-[12px] leading-[19.84px] underline">VOIR TOUTE LA COLLECTION</Link>
      </div>
      <div className="w-full max-md:w-[80%] max-sm:[70%] max-md:mt-8 max-md:mx-auto grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-12">
        {[1, 2, 3].map((item) => (
          <div key={item} className="flex flex-col justify-start items-start gap-[12px]">
            <Image
              src={article_similarity_icon}
              alt="Product Icon"
              width={330}
              height={362}
              className="w-full"
            />
            <div className="w-full flex justify-between items-start px-[10px] font-[400] text-[24px] leading-[30px]">
              <p>Title</p>
              <p>0 <sup>&#8364;</sup></p>
            </div>
            <div className="w-full flex justify-between items-center px-[12px]">
              <p className="font-[Geist] font-[500] text-[11px] leading-[13.75px] text-[#9C9C9C]">
                0.35 &#8364; /Pièce <span>:REF:VABGN5</span>
              </p>
              <div className="w-[68px] h-[26px] flex justify-center items-center bg-[#546A7D] rounded-[20px] font-[Geist] font-[500] text-[11px] leading-[13.75px]">
                20 pièces
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
