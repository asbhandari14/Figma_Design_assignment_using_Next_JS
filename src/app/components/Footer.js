"use client";

import twitter_img from "../../../public/twitter_img.png";
import insta_img from "../../../public/insta_img.png";
import linked_in_img from "../../../public/linked_in_img.png";
import nav_logo from "../../../public/nav_logo.png";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="w-full bg-white border-t border-[#39393930] text-gray-700 py-8 px-6 md:px-10 lg:px-16 mt-[10rem]">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
        {/* Left Section */}
        <div className="flex flex-col lg:flex-row  w-full gap-10">
          {/* Logo */}
          <div className="flex justify-center items-center">
            <Image src={nav_logo} width={133} height={65} alt="Logo" />
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-3 max-md:grid-cols-1 max-lg:grid-cols-3 max-md:place-items-center gap-8 lg:gap-12">
            {/* Infos Pratiques */}
            <div>
              <h3 className="font_Cabinet_Grotesk font-bold text-lg leading-6 max-md:text-center">INFOS PRATIQUES</h3>
              <ul className="list-none font-[Geist] font-normal text-sm leading-5 space-y-2 text-[#393939] max-md:text-center">
                <li>À propos</li>
                <li>Livraisons & Reprises</li>
                <li>Mode d’emploi</li>
                <li>F.A.Q</li>
              </ul>
            </div>

            {/* Légal */}
            <div>
              <h3 className="font_Cabinet_Grotesk font-bold text-lg leading-6 max-md:text-center">LÉGAL</h3>
              <ul className="list-none font-[Geist] font-normal text-sm leading-5 space-y-2 text-[#393939] max-md:text-center">
                <li>Mentions légales</li>
                <li>CGU</li>
                <li>CGV</li>
                <li>Politique de confidentialité</li>
              </ul>
            </div>

            {/* Mon Compte */}
            <div>
              <h3 className="font_Cabinet_Grotesk font-bold text-lg leading-6 max-md:text-center">MON COMPTE</h3>
              <ul className="w-full list-none font-[Geist] font-normal text-sm leading-5 space-y-2 text-[#393939] max-md:text-center">
                <li>Accéder à mon compte</li>
                <li>Ma liste d’envie</li>
                <li>Créer un compte</li>
                <li>Mot de passe oublié</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Section - Social Media */}
        <div className="w-full lg:w-auto flex flex-col items-center lg:items-start gap-4">
          <span className="font_Cabinet_Grotesk font-bold text-lg leading-6">NOUS SUIVRE</span>
          <div className="flex space-x-4">
            <Image src={twitter_img} alt="Twitter" width={36} height={36} className="hover:opacity-80" />
            <Image src={insta_img} alt="Instagram" width={36} height={36} className="hover:opacity-80" />
            <Image src={linked_in_img} alt="LinkedIn" width={36} height={36} className="hover:opacity-80" />
          </div>
        </div>
      </div>
    </footer>
  );
}
