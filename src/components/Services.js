import Image from "next/image";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      title: "Bar à Fromage",
      description:
        "Concept unique : savourez nos planches sur place dans notre espace de 40 places ou commandez en click & collect pour emporter.",
      image: "/images/planche.jpg",
      features: ["40 places assises", "Click & Collect", "Produits artisanaux"],
      cta: "Découvrir le bar",
      link: "/bar-fromage",
      capacity: "40 places + à emporter",
    },
    {
      title: "Restaurant Savoyard",
      description:
        "Savourez nos spécialités savoyardes dans un cadre chaleureux. Fondue, raclette et plats traditionnels vous attendent.",
      image: "/images/fromage.jpg",
      features: ["40 places", "Spécialités savoyardes", "Ambiance chaleureuse"],
      cta: "Réserver une place",
      link: "/reservation",
      capacity: "40 places assises",
    },
    {
      title: "Boutique Fromages",
      description:
        "Découvrez notre sélection de fromages d'exception. Livraison partout en France pour faire voyager vos papilles.",
      image: "/images/fromage.jpg",
      features: [
        "Livraison France",
        "Fromages d'exception",
        "Sélection artisanale",
      ],
      cta: "Découvrir la boutique",
      link: "/boutique",
      capacity: "Livraison nationale",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-amber-900 via-stone-800 to-amber-950 relative">
      {/* Texture bois authentique */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D2691E' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      {/* Overlay bois vieilli */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-800/30 via-transparent to-stone-900/40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-amber-100 mb-6 drop-shadow-lg">
            Nos Spécialités
          </h2>
          <p className="font-body text-xl text-amber-200/90 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            Bar à fromage, restaurant savoyard et boutique de fromages. Trois
            façons de savourer nos spécialités montagnardes.
          </p>
        </div>

        {/* Trait central décoratif */}
        <div className="flex justify-center mb-12">
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-amber-400/70 to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gradient-to-b from-amber-100 to-stone-100 rounded-2xl shadow-2xl overflow-hidden hover:shadow-amber-900/50 transition-all duration-500 transform hover:-translate-y-2 border-2 border-amber-400/60 hover:border-amber-300 relative backdrop-blur-sm flex flex-col h-full"
            >
              {/* Badge numéro */}
              <div className="absolute top-4 left-4 w-8 h-8 bg-amber-800 text-amber-50 rounded-full flex items-center justify-center font-bold text-sm z-20 shadow-lg">
                {index + 1}
              </div>

              <div className="relative h-56 overflow-hidden flex-shrink-0">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/60 via-transparent to-stone-900/20"></div>

                {/* Overlay chalet */}
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block bg-amber-800/80 backdrop-blur-sm text-amber-100 text-xs font-medium px-3 py-1 rounded-full border border-amber-600/40">
                    {service.capacity}
                  </span>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex-grow">
                  <h3 className="font-heading text-2xl font-bold text-stone-900 mb-3 group-hover:text-amber-800 transition-colors">
                    {service.title}
                  </h3>

                  <p className="font-body text-stone-700 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-sm text-stone-700 font-body"
                      >
                        <div className="w-2 h-2 bg-amber-600 rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto">
                  <Link
                    href={service.link}
                    className="w-full bg-gradient-to-r from-amber-800 to-amber-700 hover:from-amber-700 hover:to-amber-600 text-amber-50 px-6 py-3 rounded-xl text-center font-semibold transition-all duration-300 block shadow-lg hover:shadow-xl group-hover:scale-105 border border-amber-600/30"
                  >
                    {service.cta}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trait séparateur doré */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"></div>
        <div className="h-0.5 bg-gradient-to-r from-transparent via-amber-300/30 to-transparent"></div>
      </div>
    </section>
  );
}
