import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen bg-gradient-to-b from-amber-950 via-stone-900 to-amber-900">
      {/* Image de fond */}
      <div className="absolute inset-0">
        <Image
          src="/images/planche.jpg"
          alt="Chalet alpin authentique"
          fill
          className="object-cover opacity-30"
          priority
        />
      </div>

      {/* Overlay vieux chalet */}
      <div className="absolute inset-0 bg-gradient-to-t from-amber-950/80 via-stone-900/50 to-amber-900/30"></div>

      {/* Texture bois subtile */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D2691E' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      {/* Contenu */}
      <div className="relative z-10 flex items-center h-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-amber-50 mb-4 leading-tight drop-shadow-2xl">
            Le Karnotzet
          </h1>
          <p className="font-heading text-lg md:text-xl text-stone-300 mb-8 drop-shadow-lg">
            Votre restaurant &amp; bar à fromage à Saint Pierre en Faucigny
          </p>
          <p className="font-body text-lg md:text-xl text-amber-100 mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
            Bar à fromage avec 40 places ou click &amp; collect, restaurant
            savoyard traditionnel et boutique de fromages d&apos;exception
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Bouton principal - Réserver */}
            <Link
              href="/reservation"
              className="bg-amber-800 hover:bg-amber-700 text-amber-50 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Réserver une place
            </Link>

            {/* Bouton secondaire - Bar à fromage */}
            <Link
              href="/bar-fromage"
              className="border-2 border-stone-300 text-stone-200 hover:bg-stone-300 hover:text-stone-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
            >
              Bar à fromage
            </Link>

            {/* Bouton privatisation discret */}
            <Link
              href="/contact?privatisation=true"
              className="text-stone-300 hover:text-stone-200 px-6 py-3 text-sm underline transition-colors duration-300"
            >
              Privatiser le restaurant
            </Link>
          </div>
        </div>
      </div>

      {/* Trait séparateur élégant */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/60 to-transparent"></div>
    </section>
  );
}
