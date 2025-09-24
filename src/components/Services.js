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
    <section className="py-16 bg-gradient-to-b from-nude-200 to-nude-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-nude-900 mb-4">
            Nos Services
          </h2>
          <p className="font-body text-xl text-nude-700 max-w-2xl mx-auto">
            Trois expériences uniques autour de notre passion pour les fromages
            et la gastronomie savoyarde
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-nude-50 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-nude-200"
            >
              <div className="relative h-48">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-nude-900/20 to-transparent"></div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-heading text-xl font-bold text-nude-900">
                    {service.title}
                  </h3>
                  <span className="text-sm text-chalet-wood font-ui font-medium">
                    {service.capacity}
                  </span>
                </div>

                <p className="font-body text-nude-700 mb-4">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-nude-700 font-body"
                    >
                      <svg
                        className="w-4 h-4 text-chalet-gold mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href={service.link}
                  className="w-full bg-chalet-wood hover:bg-nude-800 text-nude-50 px-4 py-2 rounded-md text-center font-ui font-medium transition-all duration-300 block shadow-md hover:shadow-lg"
                >
                  {service.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
