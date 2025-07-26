import Header from "@/components/header";
import Carousel from "@/components/carousel";
import Footer from "@/components/footer";
import Section2 from "@/components/section2";
import SelfMovingCarousel from "@/components/autoCarousel";
export default function Home() {
  return (
    <>
      <Header />
      <main className="main">
        <section className="hero h-full">
          <Carousel />
        </section>
        <section>
         <Section2/>
        </section>
        {/* <section className="section-2 h-screen">
          <h1>Brands</h1>
          <SelfMovingCarousel/>
        </section> */}
      </main>
    <Footer/>
    </>
  );
}
