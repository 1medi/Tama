import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata = {
  title: "Terms of Use | Tama Supermarket",
};

export default function TermsPage() {
  return (
    <>
      <Header />

      <main className="relative overflow-hidden bg-[linear-gradient(to_bottom,_#fff7f2_0%,_#fde7dc_20%,_#fff3eb_48%,_#fffaf7_72%,_#ffffff_100%)] text-neutral-900">
        
        {/* Same background blobs */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-[-5rem] top-10 h-56 w-56 rounded-full bg-[#c1684d]/10 blur-3xl" />
          <div className="absolute right-[-5rem] top-28 h-64 w-64 rounded-full bg-[#f0b596]/20 blur-3xl" />
          <div className="absolute left-1/3 top-[30rem] h-56 w-56 rounded-full bg-[#c1684d]/8 blur-3xl" />
        </div>

        <section className="max-w-4xl mx-auto px-6 py-16 lg:py-20">
          <p className="mb-3 text-[0.72rem] font-medium uppercase tracking-[0.28em] text-[#c1684d]">
            Legal
          </p>

          <h1 className="text-4xl lg:text-5xl font-serif leading-[0.98] tracking-[-0.04em] mb-6">
            Terms of Use
          </h1>

          <p className="text-neutral-700 leading-7 mb-10 max-w-3xl">
            By using the Tama Supermarket website, you agree to the following
            terms.
          </p>

          <div className="space-y-6">
            <Section title="Content Usage">
              All content on this website belongs to Tama Supermarket and may
              not be reused without permission.
            </Section>

            <Section title="Product Information">
              Product availability and pricing may change at any time.
            </Section>

            <Section title="External Links">
              We are not responsible for third-party platforms such as Instagram
              or Google Maps.
            </Section>

            <Section title="Limitation of Liability">
              We are not responsible for any damages from use of this website.
            </Section>

            <Section title="Changes to Terms">
              These terms may be updated at any time.
            </Section>

            <Section title="Contact">
              tamasupermarket@gmail.ca
            </Section>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

function Section({ title, children }) {
  return (
    <div className="rounded-[2rem] bg-white/80 border border-black/5 p-7 shadow-[0_10px_35px_rgba(0,0,0,0.04)] backdrop-blur-sm">
      <h2 className="text-2xl font-serif tracking-[-0.02em] mb-4">
        {title}
      </h2>
      <div className="text-neutral-700 leading-7">{children}</div>
    </div>
  );
}