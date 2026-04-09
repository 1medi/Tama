import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata = {
  title: "Privacy Policy | Tama Supermarket",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />

      <main className="relative overflow-hidden bg-[linear-gradient(to_bottom,_#fff7f2_0%,_#fde7dc_20%,_#fff3eb_48%,_#fffaf7_72%,_#ffffff_100%)] text-neutral-900">
        
        {/* Background blobs (same as home) */}
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
            Privacy Policy
          </h1>

          <p className="text-neutral-700 leading-7 mb-10 max-w-3xl">
            At Tama Supermarket, we respect your privacy and are committed to
            protecting your personal information.
          </p>

          <div className="space-y-6">
            <Section title="Information We Collect">
              We may collect basic information such as your name, phone number,
              email address, or messages when you contact us.
            </Section>

            <Section title="How We Use Your Information">
              <ul className="space-y-3">
                <Bullet>Respond to inquiries</Bullet>
                <Bullet>Provide product information</Bullet>
                <Bullet>Improve our services</Bullet>
              </ul>
            </Section>

            <Section title="Sharing Your Information">
              We do not sell or share your information unless required by law.
            </Section>

            <Section title="Cookies">
              Our website may use basic cookies to improve your experience.
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

function Bullet({ children }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-2 h-2 w-2 rounded-full bg-[#c1684d]" />
      <span>{children}</span>
    </li>
  );
}