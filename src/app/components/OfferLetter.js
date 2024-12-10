"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import fridge_img from "../../../public/fridge_img.png";
import dish_img from "../../../public/dish_img.png";
import cart_img from "../../../public/cart_img.png";
import delivery_img from "../../../public/delivery_img.png";
import arrow_right from "../../../public/arrow-right.png";
import offer_letter_main_img from "../../../public/offer_letter_main_img.png";

export function OfferLetter() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Return nothing during SSR to avoid hydration errors
  }

  return (
    <div className="offerLetter_outerContainer relative w-full py-[10rem] flex flex-col">
      <div className="on_occupe w-full flex justify-center items-center h-[567px] rounded-lg bg-gradient-to-b from-[#EE4197] to-[#FFFFFF] bg-opacity-40">
        <div className="inner_container  w-[928px] h-[255px] max-lg:h-auto mx-auto flex flex-col justify-start items-center gap-3">
          <h1 className="font_Cabinet_Grotesk font-[500] text-[35px] leading-[43.4px]">On s’occupe de <span className="font_Cabinet_Grotesk font-[800] text-[35px] leading-[43.4px] text-[#5CD2DD]">tout</span> </h1>
          <span className="font-[Geist] font-[400] text-[14px] leading-[17.3px] text-[#9C9C9C]">Office ipsum you must be muted. It meeting commitment busy pain.</span>

          <div className="grid grid-cols-4 max-lg:grid-cols-2 gap-12 mt-12">
            <div className="flex flex-col justify-start items-center gap-2">
              <Image src={fridge_img} width={56} height={51} alt="Fridge" />
              <span className="font_Cabinet_Grotesk font-[500] text-[20px] max-sm:text-[15px] leading-[22px]">Livraison & Reprise</span>
              <span className="font-[Geist] font-[400] text-[14px] leading-[17.36px] text-[#9C9C9C]">Selon vos besoins</span>
            </div>
            <div className="flex flex-col justify-start items-center gap-2">
              <Image src={dish_img} width={56} height={51} alt="Dish" />
              <span className="font_Cabinet_Grotesk font-[500] text-[20px] max-sm:text-[15px] leading-[22px]">Nettoyage</span>
              <span className="font-[Geist] font-[400] text-[14px] leading-[17.36px] text-[#9C9C9C]">Selon vos besoins</span>
            </div>
            <div className="flex flex-col justify-start items-center gap-2">
              <Image src={cart_img} width={56} height={51} alt="Cart" />
              <span className="font_Cabinet_Grotesk font-[500] text-[20px] max-sm:text-[15px] leading-[22px]">Commande Illimitée</span>
              <span className="font-[Geist] font-[400] text-[14px] leading-[17.36px] text-[#9C9C9C]">Tout est possible</span>
            </div>
            <div className="flex flex-col justify-start items-center gap-2">
              <Image src={delivery_img} width={56} height={51} alt="Delivery" />
              <span className="font_Cabinet_Grotesk font-[500] text-[20px] max-sm:text-[15px] leading-[22px]">Transport & Enlèvement</span>
              <span className="font-[Geist] font-[400] text-[14px] leading-[17.36px] text-[#9C9C9C]">On s’occupe de tout.</span>
            </div>
          </div>
        </div>
      </div>

      <div className="s'inscrire absolute top-3/4 left-[2%] w-[95%] mx-auto h-[300px] max-md:h-auto flex justify-between items-center gap-6 rounded-[20px]">
        <Image src={offer_letter_main_img} alt="Offer Letter" className="max-lg:hidden" />
        <div className="w-full h-full bg-[#FFF3F9] flex flex-col justify-start items-start gap-4 p-7 rounded-[20px]">
          <h1 className="font-[500] text-[32px] max-md:text-[26px]">S&apos;inscrire & économiser <span className="text-[#5CD2DD]">10%</span></h1>
          <p className="font-[Geist] font-[500] text-[14px] leading-[22px] text-[#BDA2B0]">
            Office ipsum you must be muted. Synergize helicopter prioritize anyway job due harvest most opportunity didn&apos;t. Yet busy any meeting shark light marginalised 4-blocker message. Productize corporate nail caught synergy highlights lunch. Company another pushback items dear or any.
          </p>
          <div className="w-full flex max-sm:flex-col justify-between items-center gap-3">
            <input
              type="text"
              className="w-full h-full max-sm:py-4 px-6 border-[1px] border-[#F5E1EB] rounded-md font-[Geist] font-[300] text-[18px] leading-[18px] text-[#BDA2B0]"
              placeholder="john@doe.gmail.com"
            />
            <button className="w-[167px] h-[60px] py-[19px] px-[16px] bg-[#5CD2DD] text-white rounded-md uppercase flex justify-center items-center gap-[8px]">
            <span>S’inscrire</span>
            <Image src={arrow_right} width={22} height={22} alt="right_arrow" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
