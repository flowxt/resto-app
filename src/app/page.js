import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-950 via-stone-900 to-amber-900 text-amber-50">
      <Navbar />
      <Hero />
      <Services />
      <Footer />
    </main>
  );
}
