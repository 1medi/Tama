import Header from "@/components/header";
import Footer from "@/components/footer";
import HomeClient from "@/components/home/HomeClient";

const heroSlides = [
  { src: "/tama.jpg", alt: "Tama Supermarket storefront" },
  { src: "/2.jpg", alt: "Fresh produce at Tama Supermarket" },
  { src: "/3.jpg", alt: "Products and shelves at Tama Supermarket" },
  { src: "/IMG_8646.jpg", alt: "Products and shelves at Tama Supermarket" },
];

const storeInfo = {
  name: "Tama Supermarket",
  tagline: "Filipino, Asian groceries and more!",
  address: "698 Kingsway, Vancouver, BC",
  phone: "(604) 559-9593",
  email: "tamasupermarket@gmail.ca",
  hours: [
    { day: "Monday", hours: "10:00 AM - 8:00 PM" },
    { day: "Tuesday", hours: "10:00 AM - 8:00 PM" },
    { day: "Wednesday", hours: "10:00 AM - 8:00 PM" },
    { day: "Thursday", hours: "10:00 AM - 8:00 PM" },
    { day: "Friday", hours: "10:00 AM - 8:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 8:00 PM" },
    { day: "Sunday", hours: "10:00 AM - 8:00 PM" },
  ],
};

const departments = [
  {
    title: "Fresh produce",
    description:
      "Daily fruits and vegetables for everyday cooking and fresh meals.",
    image: "/1.jpg",
  },
  {
    title: "Filipino pantry staples",
    description:
      "Essential sauces, mixes, canned goods, and familiar pantry basics.",
    image: "/IMG_0667.jpg",
  },
  {
    title: "Rice and noodles",
    description:
      "Staple grains and quick meal options for home and family dishes.",
    image: "/IMG_7517.jpg",
  },
  {
    title: "Frozen goods",
    description:
      "Convenient frozen products, meats, and ready-to-cook selections.",
    image: "/IMG_0916.jpg",
  },
  {
    title: "Snacks and drinks",
    description:
      "Popular chips, sweets, beverages, and everyday refreshment picks.",
    image: "/IMG_0885.jpg",
  },
  {
    title: "Condiments and sauces",
    description:
      "Flavorful essentials for dipping, marinating, seasoning, and cooking.",
    image: "/IMG_0639.jpg",
  },
  {
    title: "Body Care",
    description:
      "Imported body care items and ones you're already familiar with",
    image: "/IMG_0620.jpg",
  },
  {
    title: "Local Seasonal Fruit",
    description: "A rotating selection of fresh seasonal fruits.",
    image: "/IMG_8655.jpg",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <HomeClient
        heroSlides={heroSlides}
        storeInfo={storeInfo}
        departments={departments}
      />
      <Footer />
    </>
  );
}