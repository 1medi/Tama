import Header from "@/components/header";
import Carousel from "@/components/carousel";
import Card from "@/components/card";
export default function Home() {
  return (
    <>
      <Header />
      <main className="main">
        <section className="hero h-full">
          <Carousel />
        </section>
        <section>
          <Card/>
        </section>
        <section className="section-1 h-screen">
          <div>
            <div>
              <h1>ta·ma</h1>
              <h2>*/ta·ma/ · noun</h2>
              <h3>
                the exact feeling you get when you find your mom’s soy sauce
                brand on the shelf.
              </h3>
            </div>

            <h1 className="text-4xl">
              Right food. Right price. Right for the community.
            </h1>
            <h3>
              Tama is the neighbourhood grocery that feels like home—founded on
              family names, Filipino values, and the belief that food should
              always feel right. We bring cultural staples, comforting
              essentials, and everyday value to communities with warmth, pride,
              and purpose.
            </h3>
          </div>
        </section>
        <section className="section-2 h-screen">
          <h1>Products</h1>
        </section>
      </main>
      <footer className=""></footer>
    </>
  );
}
