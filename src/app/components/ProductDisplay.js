'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import product_page_main_img from "../../../public/product_page_main_img.png";
import product_page_heart_icon from "../../../public/product_page_heart_icon.png";
import product_page_scale_icon from "../../../public/product_page_scale_icon.png";
import product_cross_circle_icon from "../../../public/product_cross_circle_icon.png";

import product_page_side_img_1 from "../../../public/product_page_side_img_1.png";
import product_page_side_img_2 from "../../../public/product_page_side_img_2.png";
import product_page_side_img_3 from "../../../public/product_page_side_img_3.png";
import product_page_side_img_4 from "../../../public/product_page_side_img_4.png";

import product_page_add_icon from "../../../public/product_page_add_icon.png";

export function ProductDisplay() {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity((prev) => Math.min(prev + 1, 99)); // Limit max quantity to 99
  };

  const decrementQuantity = () => {
    setQuantity((prev) => Math.max(prev - 1, 1)); // Limit min quantity to 1
  };

  return (
    <div className="w-full px-[23px] py-6">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-6">
        <Link href="#" className="hover:underline">Home</Link> &gt;{' '}
        <Link href="#" className="hover:underline">Art de la table</Link>
      </div>

      <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-8 rounded-md">
        {/* Product Image Section */}
        <div className="relative h-[652px] max-md:h-[400px] max-sm:h-auto bg-[#F8F6F4] flex justify-center max-md:justify-end max-sm:justify-center items-center rounded-md">
          <Image
            src={product_page_main_img}
            alt="Cheese appareil à raclette"
            className="rounded-lg bg-inherit w-[552px] h-[552px] max-md:w-[350px] max-md:h-[350px] max-sm:w-[70%] max-sm:h-auto"
            priority // Ensures the image is loaded faster
          />
          <div className="absolute sideImageBar top-0 left-0 flex flex-col gap-1 py-[10px] pl-[10px] max-sm:hidden">
            {[product_page_side_img_1, product_page_side_img_2, product_page_side_img_3, product_page_side_img_4].map((img, index) => (
              <Image
                key={index}
                src={img}
                alt={`Product view ${index + 1}`}
                width={55}
                height={55}
                className="w-16 h-16 rounded-lg border border-gray-300"
              />
            ))}
          </div>
        </div>

        {/* Product Details Section */}
        <div className="w-full h-[652px] max-md:h-[400px] pb-[17px] flex flex-col">
          <div className="flex justify-between items-center text-gray-900">
            <h1 className="text-2xl mb-4 font-[Inter] font-[400] text-[30px] leading-[37.5px]">
              Cheese – appareil à raclette 1/2 roue
            </h1>
            <Image src={product_page_heart_icon} width={27} height={25} alt="Wishlist Icon" />
          </div>
          <p className="font-[Geist] font-[400] text-[24px] leading-[30px]">
            39,50€ / <span className="text-[#9C9C9C] text-[14px] leading-[17.5px]">pièce</span>
          </p>

          <div className="w-full h-[62px] border-t-[0.5px] border-b-[0.5px] border-[#9C9C9C] mt-[11px] flex items-center">
            <div className="flex gap-6">
              <div className="flex items-center gap-2">
                <Image src={product_page_scale_icon} width={24} height={24} alt="Scale Icon" />
                <span className="font-[Geist] text-[16px] leading-[20px] font-[400]">20 <sup>cm</sup></span>
              </div>
              <div className="flex items-center gap-2">
                <Image src={product_cross_circle_icon} width={24} height={24} alt="Cross Circle Icon" />
                <span className="font-[Geist] text-[16px] leading-[20px] font-[400]">50 <sup>cm</sup></span>
              </div>
            </div>
          </div>

          <ul className="text-[#5D5D5D] font-[Geist] font-[400] text-[14px] leading-[18.2px] mt-[15px] list-none">
            <li>Location appareil à raclette - Raclette traditionnelle 1/2 roue</li>
            <li>Réglable en hauteur</li>
            <li>Appareil à raclette professionnel</li>
            <li>Boîtier de chauffe horizontal réglable en hauteur</li>
            <br />
            <li>220V</li>
            <li>900W</li>
          </ul>

          <div className="flex items-end border-t-[0.5px] mt-auto py-[18px] max-md:mt-8">
            <div className="flex items-center gap-2 w-full">
              <div className="flex justify-between items-center border rounded-sm p-3 w-[153px]">
                <button onClick={decrementQuantity} className="text-[#9C9C9C] text-[16px]">-</button>
                <span className="mx-4">{quantity}</span>
                <button onClick={incrementQuantity} className="text-[#9C9C9C] text-[16px]">+</button>
              </div>
              <button className="w-full bg-[#5CD2DD] text-white rounded-md py-3">
                Ajouter au panier
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="grid grid-cols-2 max-lg:grid-cols-1 mt-[53px]">
        <div className="pr-[51px]">
          <h2 className="text-[20px]">Description produit</h2>
          <p className="text-gray-600 mt-[10px] text-[14px]">
            Festi vous propose à la location un/une "Jewel – grand couteau/10pc" pour votre évenement et ce dès 0,35 € / pièce (HTVA). Que ce soit pour votre mariage, une fête d'anniversaire ou du personnel, ce produit a fait l'objet d'une sélection rigoureuse par notre équipe. Il est en location chez nous sous la référence "VAJGC". Nous sommes à votre disposition pour que les événements de nos clients, même en last-minute, soient toujours une réussite. Vous pourrez trouver tout une série d'autre produit à louer de ce type dans la catégorie "Art de la Table".
          </p>
        </div>
        <div className="flex flex-col max-lg:mt-8">
          {['Livraisons', 'Questions'].map((item, index) => (
            <div key={index} className="flex justify-between items-center bg-[#FBF9F899] p-4">
              <p className='uppercase'>{item}</p>
              <Image src={product_page_add_icon} alt={`${item} Icon`} width={16} height={16} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
