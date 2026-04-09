"use client";

import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { motion } from "framer-motion";

const brands = [
  {
    name: "Mama Sita's",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/2/26/Mama_Sita%27s_Holding_Company_Logo.png/250px-Mama_Sita%27s_Holding_Company_Logo.png",
    description: "Filipino sauces, mixes, and traditional cooking essentials.",
  },
  {
    name: "Datu Puti",
    image: "/datuputi.jpeg",
    description: "Vinegars, soy sauces, and pantry staples for everyday meals.",
  },
  {
    name: "Lucky Me!",
    image: "/luckyme.png",
    description: "Popular instant noodles and quick meal options.",
  },
  {
    name: "Silver Swan",
    image: "/silverswan.jpeg",
    description: "Classic soy sauces and condiments used in Filipino cooking.",
  },
  {
    name: "UFC",
    image: "/ufc.png",
    description: "Well-known Filipino beverages and pantry favorites.",
  },
  {
    name: "Philippine Brand",
    image: "/philippine.jpg",
    description: "Imported grocery products and everyday household staples.",
  },
  {
    name: "Don Chendo",
    image: "/donchendo.png",
    description: "Snacks, drinks, noodles, and familiar quick-grab items.",
  },
  {
    name: "More Brands Coming",
    image: "/tama.jpg",
    description: "More trusted brands and specialty finds available in store.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function ProductsPage() {
  return (
    <>
      <Header />

      <main className="relative overflow-hidden bg-[linear-gradient(to_bottom,_#fff7f2_0%,_#fde7dc_20%,_#fff3eb_48%,_#fffaf7_72%,_#ffffff_100%)] text-neutral-900">
        <div className="pointer-events-none fixed inset-0 ">
          <div className="relative h-screen w-full">
            <Image
              src="/1.jpg"
              alt="Picture inside tama supermarket"
              fill
              priority
              className="object-cover object-center opacity-10"
            />
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-8rem] top-16 h-64 w-64 rounded-full bg-[#c1684d]/10 blur-3xl" />
          <div className="absolute right-[-6rem] top-40 h-72 w-72 rounded-full bg-[#f0b596]/20 blur-3xl" />
          <div className="absolute left-1/3 top-[32rem] h-56 w-56 rounded-full bg-[#c1684d]/8 blur-3xl" />
        </div>

        <section className="relative border-b border-black/5">
          <div className="max-w-6xl mx-auto px-6 py-16 lg:py-24">
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-4xl"
            >
              <p className="mb-4 text-[0.72rem] font-medium uppercase tracking-[0.28em] text-[#a5543c]">
                Products
              </p>

              <h1 className="max-w-4xl text-5xl leading-[0.95] tracking-[-0.04em] lg:text-7xl font-serif">
                Brands We Carry
              </h1>

              <div className="mt-6 max-w-2xl">
                <p className="text-base leading-8 text-neutral-700 lg:text-lg">
                  Browse a selection of Filipino and Asian brands available in
                  store. Availability may vary. For more details on specific
                  products, please call us or message us on Instagram.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="tel:+16045599593"
                    className="inline-flex items-center rounded-full bg-[#c1684d] px-5 py-2.5 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#a5543c]"
                  >
                    Call (604) 559-9593
                  </a>

                  <a
                    href="https://www.instagram.com/tamasupermarket/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-full border border-black/10 bg-white/80 px-5 py-2.5 text-sm font-medium text-neutral-800 backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:bg-[#fff7f2]"
                  >
                    Message on Instagram
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="relative">
          <div className="max-w-6xl mx-auto px-6 py-12 lg:py-16">
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4"
            >
              {brands.map((brand) => (
                <motion.div
                  key={brand.name}
                  variants={item}
                  whileHover={{ y: -8, scale: 1.01 }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                  className="group relative overflow-hidden rounded-[2rem] border border-black/5 bg-white/80 p-6 shadow-[0_12px_40px_rgba(0,0,0,0.04)] backdrop-blur-sm"
                >
                  <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#c1684d]/10 to-transparent opacity-80" />

                  <div className="relative flex min-h-[250px] flex-col">
                    <div className="mb-6 flex h-[84px] items-center justify-center overflow-hidden rounded-2xl bg-[#fff8f4]">
                      <motion.div
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                      >
                        <Image
                          src={brand.image}
                          alt={brand.name}
                          width={130}
                          height={80}
                          className="h-[64px] w-auto object-contain"
                        />
                      </motion.div>
                    </div>

                    <div className="mb-3">
                      <h2 className="text-xl font-serif leading-tight tracking-[-0.02em] text-neutral-900">
                        {brand.name}
                      </h2>
                    </div>

                    <p className="text-sm leading-7 text-neutral-600">
                      {brand.description}
                    </p>

                    <div className="mt-auto pt-6">
                      <div className="h-px w-full bg-black/5 transition duration-300 group-hover:bg-[#c1684d]/20" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
