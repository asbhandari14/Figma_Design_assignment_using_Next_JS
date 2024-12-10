import { AddSimilarity } from "./components/Articles_similarity";
import { Ces_produits } from "./components/Ces_produits";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { OfferLetter } from "./components/OfferLetter";
import {ProductDisplay} from "./components/ProductDisplay";






export default function Home(){
  return(
    <>
      <Navbar />
      <ProductDisplay />
      <AddSimilarity />
      <Ces_produits />
      <OfferLetter />
      <Footer />
    </>
  )
}