"use client"

import heroImage from "/public/tama.jpg";
import Image from "next/image";
import Header from "@/components/header";
import Carousel from "@/components/carousel";
import Footer from "@/components/footer";
import Section2 from "@/components/section2";

const featuredProducts = [
  { name: "Fresh Kangkong", price: "$2.99/bunch", category: "Vegetables" },
  { name: "Pancit Canton Noodles", price: "$1.49", category: "Pantry" },
  { name: "Ube Ice Cream", price: "$6.99", category: "Frozen" },
  { name: "Jasmine Rice 25lbs", price: "$24.99", category: "Rice & Grains" },
  { name: "Fish Sauce (Patis)", price: "$3.49", category: "Condiments" },
  { name: "Fresh Durian", price: "$12.99/kg", category: "Fruits" },
];

const communityHighlights = [
  {
    title: "Community Food Drive",
    description: "Supporting local families in need",
  },
  {
    title: "Cultural Cooking Classes",
    description: "Learn traditional Filipino recipes",
  },
  {
    title: "Local Vendor Partnerships",
    description: "Supporting Filipino entrepreneurs",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="main">
        {/* Hero Section */}
        <section className="relative bg-background py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="space-y-2">
                  <p className="mb-4">Est. 2017 • Vancouver</p>
                  <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                    Welcome to <span className="">Tama Supermarket</span>
                  </h1>
                  <p className="text-xl text-muted-foreground">
                    Your trusted Filipino & Asian grocery store in the heart of
                    Vancouver. Fresh produce, authentic flavors, and warm
                    community spirit.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <button className="btn btn-primary">Shop Now</button>
                  <button className="btn btn-primary">Visit Us</button>
                </div>
              </div>

              <div className="relative">
                <Image
                  src={heroImage}
                  alt="Tama Supermarket interior with fresh produce"
                  className="rounded-lg shadow-warm w-full h-[400px] object-cover"
                />
                <div className="absolute -bottom-4 -left-4 p-4 rounded-lg shadow-gentle border border-border">
                  <div className="flex items-center gap-3">
                    <div>
                      <p className="font-semibold">8 Years!</p>
                      <p className="text-sm ">Serving our community</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Carousel Section */}
        <section className="p-4 m-4">
          <Carousel />
        </section>

        <div className="divider"></div>

        {/* Featured Products */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Featured Products
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Discover our most popular items, handpicked for quality and
                authenticity
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProducts.map((product, index) => (
                <div
                  key={index}
                  className="group border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 relative"
                >
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-xs px-2 py-1 border rounded text-muted-foreground">
                      {product.category}
                    </span>
                    <span className="text-muted-foreground cursor-pointer transition-colors group-hover:text-primary">
                      ♡
                    </span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {product.name}
                  </h3>
                  <p className="text-lg font-bold text-primary">
                    {product.price}
                  </p>

                  <button
                    className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 bg-primary text-white text-xs px-3 py-1 rounded transition-opacity"
                    onClick={() => alert(`Added ${product.name} to list`)}
                  >
                    + Add to List
                  </button>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <button variant="outline" size="lg">
                View All Products
              </button>
            </div>
          </div>
        </section>

        <div className="divider"></div>

        {/* Store Info */}
        <Section2 />

        <div className="divider"></div>

        {/* Community Highlights
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Community Connection
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                More than just a grocery store - we're part of the Vancouver
                Filipino community
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {communityHighlights.map((highlight, index) => (
                <Card key={index} className="hover:shadow-gentle transition-shadow duration-300">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground mb-2">{highlight.title}</h3>
                    <p className="text-muted-foreground">{highlight.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section> */}
      </main>
      <Footer />
    </>
  );
}
