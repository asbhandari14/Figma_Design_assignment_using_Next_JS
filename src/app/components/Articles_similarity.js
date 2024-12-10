"use client";

import Image from "next/image";
import article_similarity_icon from "../../../public/article_similarity_icon.png";
import arrow_left from "../../../public/arrow-left.png";
import arrow_right from "../../../public/arrow-right.png";
import Link from "next/link";



export function AddSimilarity() {
  return (
    <div className="articles_similarity_container relative w-full flex flex-col justify-start items-start p-4 gap-[30px] my-8">
      <div className="w-full flex max-lg:flex-col justify-between items-center">
      <h1 className="font-[500] text-[35px] leading-[43.4px]">Articles similaires</h1>
      <Link href="#" className="font_Cabinet_Grotesk font-[500] text-[16px] leading-[19.84px] underline">Voir toute la collection</Link>
      </div>
      <button className="absolute top-1/2 left-0 w-[46px] h-[46px] bg-[#5CD2DD] flex justify-center items-center max-md:hidden">
        <Image src={arrow_left} width={26} height={26} alt="left arrow" />
      </button>
      <button className="absolute top-1/2 right-0 w-[46px] h-[46px] bg-[#5CD2DD] flex justify-center items-center max-md:hidden">
      <Image src={arrow_right} width={26} height={26} alt="left arrow" />
      </button>
      <div className="similarity_image_slider w-full max-md:w-[70%] max-md:mx-auto">
        <div className="similarity_image_slider w-full grid grid-cols-5 max-2xl:grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-[19px] max-lg:gap-8">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="flex flex-col justify-start items-start gap-[1px]">
              <Image
                src={article_similarity_icon}
                alt="Article Similarity Icon"
                className="w-[330px] max-xl:w-full"
                loading="lazy"
              />
              <div className="w-full flex justify-between items-start px-[10px] font-[400] text-[24px] leading-[30px]">
                <p>Title</p>
                <p>
                  0 <sup>&#8364;</sup>
                </p>
              </div>
              <div className="w-full flex justify-between items-center px-[10px]">
                <p className="font-[Geist] font-[500] text-[14px] leading-[13.75px] text-[#9C9C9C]">
                  0.35 &#8364; /Pièce <span>:REF:VABGN5</span>
                </p>
                <div className="w-[68px] h-[26px] flex justify-center items-center bg-[#F1F4F6] text-[#546A7D] rounded-[20px] font-[Geist] font-[500] text-[11px] leading-[13.75px]">
                  20 pièces
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
