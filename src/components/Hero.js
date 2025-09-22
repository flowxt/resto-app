import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen bg-gradient-to-br from-nude-900 via-nude-800 to-chalet-wood">
      {/* Image de fond */}
      <div className="absolute inset-0">
        <Image
          src="/images/chalet.jpeg"
          alt="Chalet alpin authentique"
          fill
          className="object-cover opacity-40"
          priority
        />
      </div>

      {/* Overlay pour améliorer la lisibilité */}
      <div className="absolute inset-0 bg-gradient-to-t from-nude-950/60 via-nude-900/30 to-nude-800/20"></div>

      {/* Contenu */}
      <div className="relative z-10 flex items-center h-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-nude-50 mb-6 leading-tight">
            L&apos;Art du Fromage
            <br />
            <span className="text-chalet-gold">&amp; de la Gastronomie</span>
            <br />
            <span className="text-chalet-warm">Savoyarde</span>
          </h1>
          <p className="font-body text-lg md:text-xl lg:text-2xl text-nude-100 mb-10 max-w-3xl mx-auto leading-relaxed">
            Dans l&apos;authenticité d&apos;un vieux chalet alpin, découvrez notre concept
            unique : bar à fromage avec 40 places ou click &amp; collect,
            restaurant savoyard traditionnel et boutique de fromages d&apos;exception
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/reservation"
              className="bg-chalet-wood hover:bg-nude-800 text-nude-50 px-8 py-4 rounded-lg text-lg font-ui font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Réserver une table
            </Link>
            <Link
              href="/bar-fromage"
              className="border-2 border-nude-100 text-nude-100 hover:bg-nude-100 hover:text-nude-900 px-8 py-4 rounded-lg text-lg font-ui font-semibold transition-all duration-300"
            >
              Découvrir le bar à fromage
            </Link>
            <Link
              href="/boutique"
              className="bg-chalet-gold hover:bg-chalet-warm text-nude-950 px-8 py-4 rounded-lg text-lg font-ui font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Boutique en ligne
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
