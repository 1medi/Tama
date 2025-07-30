// app/layouts/PageLayout.jsx
"use client";

export const metadata = {
  title: "Products | Tama Supermarket",
  description: "Browse our fresh produce, meats, snacks, and Filipino staples.",
};

import Header from "@/components/header";
import Footer from "@/components/footer";

export default function PageLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="flex-grow container mx-auto px-4 py-12">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
