import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-nude-950 text-nude-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Image
                src="/images/logo.png"
                alt="Logo Restaurant"
                width={50}
                height={50}
                className="h-10 w-auto mr-3"
              />
              <span className="font-heading text-xl font-bold text-chalet-warm">Restaurant & Bar à Fromage</span>
            </div>
            <p className="font-body text-nude-200 mb-4">
              Concept unique alliant bar à fromage, restaurant savoyard et boutique en ligne. 
              Une expérience gastronomique authentique autour des fromages d'exception.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-nude-300 hover:text-chalet-warm transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-nude-300 hover:text-chalet-warm transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="#" className="text-nude-300 hover:text-chalet-warm transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.748-1.378 0 0-.599 2.282-.744 2.840-.282 1.084-1.064 2.456-1.549 3.235C9.584 23.815 10.77 24.001 12.017 24.001c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4 text-chalet-warm">Navigation</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="font-ui text-nude-200 hover:text-chalet-warm transition-colors">Accueil</Link></li>
              <li><Link href="/restaurant" className="font-ui text-nude-200 hover:text-chalet-warm transition-colors">Restaurant</Link></li>
              <li><Link href="/bar-fromage" className="font-ui text-nude-200 hover:text-chalet-warm transition-colors">Bar à Fromage</Link></li>
              <li><Link href="/boutique" className="font-ui text-nude-200 hover:text-chalet-warm transition-colors">Boutique</Link></li>
              <li><Link href="/reservation" className="font-ui text-nude-200 hover:text-chalet-warm transition-colors">Réservation</Link></li>
              <li><Link href="/contact" className="font-ui text-nude-200 hover:text-chalet-warm transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4 text-chalet-warm">Contact</h3>
            <ul className="space-y-2 text-nude-200 font-body">
              <li>📍 123 Rue de la Montagne</li>
              <li>73000 Chambéry, Savoie</li>
              <li>📞 04 79 XX XX XX</li>
              <li>✉️ contact@restaurant-fromage.fr</li>
            </ul>
            <div className="mt-4">
              <h4 className="font-heading font-semibold mb-2 text-chalet-warm">Horaires</h4>
              <ul className="text-sm text-nude-200 font-body space-y-1">
                <li>Mar-Dim : 11h30-14h30</li>
                <li>Jeu-Sam : 18h30-22h30</li>
                <li>Fermé le lundi</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-nude-800 mt-8 pt-8 text-center text-nude-300">
          <p className="font-body">&copy; 2024 Restaurant & Bar à Fromage. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
