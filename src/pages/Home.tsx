import Hero from "../components/Hero";
import Faq from "../components/Faq";
import CTA from "../components/CTA";
import Product from "../components/Product";
import HomeAndKitchen from "../components/Home&Kitchen";

export default function Home() {
  return (
    <>
      <Hero />
      <Product />
      <HomeAndKitchen />
      <Faq />
      <CTA />
    </>
  );
}
