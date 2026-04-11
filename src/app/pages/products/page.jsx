"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { motion, AnimatePresence } from "framer-motion";
import rawProducts from "@/data/inventory.json";

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
    name: "All Items!",
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

function normalize(str) {
  if (typeof str !== "string") return "";
  return str.toLowerCase().trim();
}

function parseMoney(value) {
  if (!value) return null;
  const cleaned = String(value).replace(/[^0-9.-]/g, "");
  if (!cleaned) return null;
  const num = Number(cleaned);
  return Number.isFinite(num) ? num : null;
}

function isBlankRow(row) {
  return !row?.["Name"]?.trim();
}

function isHeaderRow(row) {
  return !!row?.["Variant Attribute"] && !row?.["Price"];
}

export default function ProductsPage() {
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const cardsRef = useRef(null);
  const resultsRef = useRef(null);

  const handleSelectBrand = (brand) => {
    if (selectedBrand?.name === brand.name) {
      setSelectedBrand(null);
      setSelectedCategory("all");
      setSearchQuery("");

      setTimeout(() => {
        cardsRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 50);

      return;
    }

    setSelectedBrand(brand);
    setSelectedCategory("all");
    setSearchQuery("");

    setTimeout(() => {
      resultsRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 150);
  };

  const handleClose = () => {
    setSelectedBrand(null);
    setSelectedCategory("all");
    setSearchQuery("");

    setTimeout(() => {
      cardsRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 50);
  };

  const brandItems = selectedBrand
    ? selectedBrand.name === "All Items!"
      ? rawProducts.filter((row) => !isBlankRow(row) && !isHeaderRow(row))
      : rawProducts.filter((row) => {
          const name = normalize(row["Name"]);
          const selected = normalize(selectedBrand.name);

          return (
            !isBlankRow(row) && !isHeaderRow(row) && name.includes(selected)
          );
        })
    : [];

  const categoryOptions = [
    "all",
    ...new Set(
      brandItems.map((item) => item["Categories"]?.trim()).filter(Boolean)
    ),
  ];

  const filteredItems = brandItems
    .filter((item) => {
      const matchesCategory =
        selectedCategory === "all" ||
        item["Categories"]?.trim() === selectedCategory;

      const query = normalize(searchQuery);

      const matchesSearch =
        !query ||
        normalize(item["Name"]).includes(query) ||
        normalize(item["Categories"]).includes(query) ||
        normalize(String(item["SKU"] || "")).includes(query) ||
        normalize(String(item["Product Code"] || "")).includes(query);

      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => normalize(a["Name"]).localeCompare(normalize(b["Name"])));

  return (
    <>
      <Header />

      <main className="relative overflow-hidden bg-[linear-gradient(to_bottom,_#fff7f2_0%,_#fde7dc_20%,_#fff3eb_48%,_#fffaf7_72%,_#ffffff_100%)] text-neutral-900">
        <div className="pointer-events-none fixed inset-0">
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
          <div className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-4xl"
            >
              <p className="mb-4 text-[0.72rem] font-medium uppercase tracking-[0.28em] text-[#a5543c]">
                Products
              </p>

              <h1 className="max-w-4xl text-5xl font-serif leading-[0.95] tracking-[-0.04em] lg:text-7xl">
                Our Product Selection
              </h1>

              <div className="mt-6 max-w-2xl">
                <p className="text-base leading-8 text-neutral-700 lg:text-lg">
                  Browse a selection of Filipino and Asian brands available in
                  store. Click a card to view items associated with that brand.
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

        <section ref={cardsRef} className="relative scroll-mt-24"> 

          <div className="mx-auto max-w-6xl px-6 py-12 lg:py-16">
          <h2 className="max-w-4xl text-3xl font-serif leading-[0.95] tracking-[-0.04em] lg:text-5xl mb-4 ">View By Brand</h2>
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4"
            >
              {brands.map((brand) => {
                const isActive = selectedBrand?.name === brand.name;

                return (
                  <motion.button
                    type="button"
                    key={brand.name}
                    variants={item}
                    whileHover={{ y: -8, scale: 1.01 }}
                    transition={{ duration: 0.28, ease: "easeOut" }}
                    onClick={() => handleSelectBrand(brand)}
                    className={`group relative overflow-hidden rounded-[2rem] border p-6 text-left shadow-[0_12px_40px_rgba(0,0,0,0.04)] backdrop-blur-sm transition ${
                      isActive
                        ? "border-[#c1684d]/30 bg-[#fff7f2]"
                        : "border-black/5 bg-white/80"
                    }`}
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
                        <p className="mt-4 text-sm font-medium text-[#a5543c]">
                          {isActive ? "Hide items" : "View items"}
                        </p>
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </motion.div>

            <AnimatePresence mode="wait">
              {selectedBrand && (
                <motion.div
                  ref={resultsRef}
                  key={selectedBrand.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="scroll-mt-28 mt-10 rounded-[2rem] border border-black/5 bg-white/90 p-6 shadow-[0_12px_40px_rgba(0,0,0,0.04)] backdrop-blur-sm lg:p-8"
                >
                  <div className="flex flex-col gap-4 border-b border-black/5 pb-6 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-[0.72rem] font-medium uppercase tracking-[0.24em] text-[#a5543c]">
                        Selected Brand
                      </p>
                      <h3 className="mt-2 text-3xl font-serif tracking-[-0.03em] text-neutral-900">
                        {selectedBrand.name}
                      </h3>
                      <p className="mt-2 max-w-2xl text-sm leading-7 text-neutral-600">
                        Items from our store pulled straight from our inventory system.
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={handleClose}
                      className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium text-neutral-800 transition hover:bg-[#fff7f2]"
                    >
                      Close
                    </button>
                  </div>

                  {categoryOptions.length > 1 && (
                    <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:items-center">
                      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                        <input
                          type="text"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          placeholder="Search items..."
                          className="w-full rounded-full border border-black/10 bg-white px-4 py-2 text-sm text-neutral-800 outline-none placeholder:text-neutral-400"
                        />

                        {categoryOptions.length > 1 && (
                          <select
                            id="category-filter"
                            value={selectedCategory}
                            onChange={(e) =>
                              setSelectedCategory(e.target.value)
                            }
                            className="w-full rounded-full border border-black/10 bg-white px-4 py-2 text-sm text-neutral-800 outline-none sm:w-auto"
                          >
                            {categoryOptions.map((cat) => (
                              <option key={cat} value={cat}>
                                {cat === "all" ? "All Categories" : cat}
                              </option>
                            ))}
                          </select>
                        )}
                      </div>
                    </div>
                  )}

                  <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredItems.length > 0 ? (
                      filteredItems.map((product, index) => {
                        const itemKey = `${product["Clover ID"] || "no-id"}-${
                          product["Name"] || "no-name"
                        }-${index}`;

                        return (
                          <div
                            key={itemKey}
                            className="rounded-2xl border border-black/5 bg-[#fff8f4] px-4 py-4"
                          >
                            <p className="text-sm font-medium text-neutral-900">
                              {product["Name"]}
                            </p>

                            {product["Categories"]?.trim() && (
                              <p className="mt-1 text-sm text-neutral-600">
                                {product["Categories"].trim()}
                              </p>
                            )}

                            {parseMoney(product["Price"]) !== null && (
                              <p className="mt-1 text-sm text-neutral-700">
                                ${parseMoney(product["Price"]).toFixed(2)}
                              </p>
                            )}
                          </div>
                        );
                      })
                    ) : (
                      <p className="text-sm text-neutral-600">
                        No items found for this selection.
                      </p>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
