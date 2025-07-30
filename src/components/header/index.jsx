"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import Tama from "/public/tama.svg";
// import { FaAlignJustify } from "react-icons/fa6";
import Menu from "../menu";
import { Button } from "@material-tailwind/react";
const navigation = [
  { name: "About", link: "/about" },
  { name: "Products", link: "/about" },
  { name: "Vendors", link: "/about" },
  { name: "Contact", link: "/about" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState();

  return (
    <header>
      <Button>Button</Button>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-none">
          <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label
                htmlFor="my-drawer"
                className="btn btn-primary drawer-button"
              >
                {/* <FaAlignJustify/> */}
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                {/* Sidebar content here */}
                <li>
                  <Link href={"/pages/products"}>
                  <h1>Products</h1>
                  </Link>
                </li>
                <li>
                  <Link href={"/pages/contact"}>
                  <h1>Contact Us!</h1>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-4 m-4">
            <Link href={"/"}>
              <Image src={Tama} alt="Tama wordmark" height={48} />
            </Link>
          </div>
        </div>
        {/* <div className="flex-none">
          <input
            type="checkbox"
            className="toggle"
            onChange={(e) =>
              document.documentElement.setAttribute(
                "data-theme",
                e.target.checked ? "dark" : "light"
              )
            }
          />
        </div> */}
      </div>
    </header>
  );
}
