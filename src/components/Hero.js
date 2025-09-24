import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen bg-gradient-to-br from-amber-950 via-stone-900 to-amber-900">
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
          {/* Badge artisanal */}
          <div className="inline-flex items-center bg-amber-800/30 backdrop-blur-sm border border-amber-600/40 rounded-full px-6 py-2 mb-8">
            <span className="text-amber-200 text-sm font-medium">
              🏔️ Authentique Chalet Alpin depuis 1892
            </span>
          </div>

          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-amber-50 mb-6 leading-tight drop-shadow-2xl">
            L&apos;Art du Fromage
            <br />
            <span className="text-amber-300">&amp; de la Gastronomie</span>
            <br />
            <span className="text-stone-300">Savoyarde</span>
          </h1>
          <p className="font-body text-lg md:text-xl lg:text-2xl text-amber-100 mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
            Dans l&apos;authenticité d&apos;un vieux chalet alpin, découvrez
            notre concept unique : bar à fromage avec 40 places ou click &amp;
            collect, restaurant savoyard traditionnel et boutique de fromages
            d&apos;exception
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            {/* Bouton principal - Réserver */}
            <Link
              href="/reservation"
              className="group relative bg-gradient-to-r from-amber-800 to-amber-700 hover:from-amber-700 hover:to-amber-600 text-amber-50 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 border border-amber-600/50"
            >
              <span className="relative z-10">🪑 Réserver une place</span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600/0 to-amber-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Link>

            {/* Bouton secondaire - Bar à fromage */}
            <Link
              href="/bar-fromage"
              className="group bg-stone-800/60 backdrop-blur-sm border-2 border-amber-300/60 text-amber-100 hover:bg-amber-300/20 hover:border-amber-200 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
            >
              🧀 Bar à fromage
            </Link>

            {/* Bouton privatisation discret */}
            <Link
              href="/contact?privatisation=true"
              className="group bg-stone-700/40 backdrop-blur-sm border border-stone-500/40 text-stone-300 hover:bg-stone-600/60 hover:text-stone-200 px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300"
            >
              🏠 Privatiser le chalet
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
