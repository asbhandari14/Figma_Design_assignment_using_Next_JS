'use client'

import Image from "next/image";
import nav_logo from "../../../public/nav_logo.png";
import nav_search_icon from "../../../public/nav_search_icon.png";
import nav_bulb_icon from "../../../public/nav_bulb_icon.png";
import nav_heart_icon from "../../../public/nav_heart_icon.png";
import nav_cart_icon from "../../../public/nav_cart_icon.png";
import Link from "next/link";
import { useState, useEffect } from "react";
import { IoMenu } from "react-icons/io5";

export function Navbar() {
    const categories = [
        'ART DE LA TABLE',
        'MOBILIER',
        'NAPPAGE',
        'MATÉRIEL DE SALLE',
        'CUISINE',
        'BARBECUE',
        'TENTE',
        'CHAUFFAGE',
        'PODIUM - PISTE DE DANSE',
        'SON ET LUMIÈRE',
        'PACKS',
        'CONSOMMABLES',
    ];

    // Ensures client-side only rendering for browser-dependent logic
    const [isClient, setIsClient] = useState(false);
    const [hiddenMenu, setHiddenMenu] = useState(true);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null; // Avoid rendering on the server to prevent mismatch
    }

    return (
        <>
            <header className="navbar_container h-[168px] max-lg:h-auto border-b-[1px] border-[#E5E7EB]">
                <div className="navbar_upper_container flex justify-between items-center p-[1.813rem]">
                    <div className="flex items-center gap-[10px]">
                        <Image src={nav_logo} width={133} height={65} alt="Logo" />
                        <div className="w-[48rem] max-2xl:w-[30rem] max-xl:w-[18rem] max-lg:hidden flex justify-between items-center rounded-[6px] bg-[#F9FAFB]">
                            <input
                                type="text"
                                placeholder="Rechercher un produit"
                                className="w-full pl-4 py-2 text-sm outline-none bg-inherit font-[Geist] font-[400] text-[14px] leading-[21px] text-[#667482]"
                            />
                            <button className="text-purple-500">
                                <Image src={nav_search_icon} width={50} height={50} alt="Search" />
                            </button>
                        </div>
                    </div>

                    <IoMenu className="text-4xl hidden max-lg:flex" onClick={()=>{setHiddenMenu(!hiddenMenu); console.log(hiddenMenu)}} />

                    {/* Navigation Links */}
                    <nav className="flex justify-start items-center space-x-4 max-xl:space-x-2 max-lg:hidden">
                        <div className="flex justify-start items-center gap-[8px] max-xl:gap-[4px]">
                            <Image src={nav_bulb_icon} width={18} height={18} alt="Bulb Icon" />
                            <Link href="#" className="font-[Poppins] font-[500] text-[14px] leading-[21px]">
                                Inspirations
                            </Link>
                        </div>
                        <div className="flex justify-start items-center gap-[8px] p-[10px]">
                            <Image src={nav_heart_icon} width={20} height={20} alt="Heart Icon" />
                            <Link href="#" className="font-[Poppins] font-[500] text-[14px] leading-[21px] flex justify-center items-center">
                                Mes favoris
                                <div className="w-[28px] h-[18px] rounded-[30px] flex justify-center items-center bg-[#CAD2D566] font-[Poppins] font-[500] text-[10px] leading-[15px] mx-[8px]">
                                    24
                                </div>
                            </Link>
                        </div>
                        <button className="w-[105px] h-[48px] rounded-[6px] bg-[#0093D0] text-[#FFFFFF] gap-[8px] flex justify-center items-center px-[16px] py-[10px] border-[1px] border-[#007AAD]">
                            <Image src={nav_cart_icon} alt="Cart Icon" />
                            <span className="font-[Poppins] font-[500] text-[14px] leading-[21px]">Panier</span>
                        </button>
                        <div className="w-[44px] h-[44px] rounded-[46px] bg-[#EAEDEE]"></div>
                        <select name="" id="" className="bg-inherit">
                            <option value="">FR</option>
                        </select>
                    </nav>
                </div>

                {/* Categories Section */}
                <div className="navbar_lower w-full px-[23px] max-lg:hidden">
                    <div className="w-full flex justify-between items-start pb-[14px]">
                        {categories.map((category, index) => (
                            <Link
                                key={index}
                                href="#"
                                className={`text-sm ${(index == 0) ? "text-[#0093D0] pb-6 border-b-2 border-[#0093D0]" : "text-gray-500"}  font-[Inter] font-[500] text-[14px] max-2xl:text-[8px] leading-[21px]`}
                            >
                                {category}
                            </Link>
                        ))}
                    </div>
                </div>
            </header>

{/* This is the code for the hidden navbar  */}
            <div className={`hidden_navbar  w-full ${(hiddenMenu)?"hidden":"flex"} lg:hidden flex-col justify-start items-center gap-8 py-10`}>
                <div className="w-[70%] hidden mx-auto max-lg:flex justify-between items-center rounded-[6px] bg-[#F9FAFB]">
                    <input type="text" placeholder="Rechercher un produit" className="w-full pl-4 py-2 text-sm outline-none bg-inherit font-[Geist] font-[400] text-[14px] leading-[21px] text-[#667482]" />
                    <button className="text-purple-500">
                        <Image src={nav_search_icon} width={50} height={50} alt="Search" />
                    </button>
                </div>


                <nav className="hidden max-lg:flex max-sm:flex-wrap max-sm:gap-3 max-sm:justify-center justify-start items-center space-x-4 max-xl:space-x-2">
                    <div className="flex justify-start items-center gap-[8px] max-xl:gap-[4px]">
                        <Image src={nav_bulb_icon} width={18} height={18} alt="Bulb Icon" />
                        <Link href="#" className="font-[Poppins] font-[500] text-[14px] leading-[21px]">
                            Inspirations
                        </Link>
                    </div>
                    <div className="flex justify-start items-center gap-[8px] p-[10px]">
                        <Image src={nav_heart_icon} width={20} height={20} alt="Heart Icon" />
                        <Link href="#" className="font-[Poppins] font-[500] text-[14px] leading-[21px] flex justify-center items-center">
                            Mes favoris
                            <div className="w-[28px] h-[18px] rounded-[30px] flex justify-center items-center bg-[#CAD2D566] font-[Poppins] font-[500] text-[10px] leading-[15px] mx-[8px]">
                                24
                            </div>
                        </Link>
                    </div>
                    <button className="w-[105px] h-[48px] rounded-[6px] bg-[#0093D0] text-[#FFFFFF] gap-[8px] flex justify-center items-center px-[16px] py-[10px] border-[1px] border-[#007AAD]">
                        <Image src={nav_cart_icon} alt="Cart Icon" />
                        <span className="font-[Poppins] font-[500] text-[14px] leading-[21px]">Panier</span>
                    </button>
                    <div className="w-[44px] h-[44px] rounded-[46px] bg-[#EAEDEE]"></div>
                    <select name="" id="" className="bg-inherit">
                        <option value="">FR</option>
                    </select>
                </nav>


                <div className="navbar_lower w-full px-[23px] hidden max-lg:flex justify-center items-center">
                    <div className="w-full grid grid-cols-6 max-md:grid-cols-4 max-sm:grid-cols-2 place-items-center gap-2 pb-[14px]">
                        {categories.map((category, index) => (
                            <Link
                                key={index}
                                href="#"
                                className={`text-sm ${(index == 0) ? "text-[#0093D0] border-b border-[#0093D0]" : "text-gray-500"}  font-[Inter] font-[500] text-[14px] leading-[21px] max-sm:text-center`}
                            >
                                {category}
                            </Link>
                        ))}
                    </div>
                </div>

            </div>

        </>
    );
}