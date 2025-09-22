import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-chalet-brown-900 text-chalet-white">
      <Navbar />
      <Hero />
      <Services />
      <Footer />
    </main>
  );
}
