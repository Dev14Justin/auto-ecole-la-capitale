import Link from 'next/link';
import { Phone, Mail, MapPin, CheckCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4 uppercase">Auto-École La Capitale</h3>
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              Votre partenaire de confiance pour l'obtention de votre permis de conduire. Formation de qualité, moniteurs expérimentés et résultats garantis.
            </p>
            <div className="flex items-center mb-2 text-accent font-semibold text-sm">
              <CheckCircle className="h-4 w-4 mr-2" />
              <span>Agrément N° 020/MTRAF/META</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-primary transition-colors text-sm">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/formations" className="text-gray-300 hover:text-primary transition-colors text-sm">
                  Formations & Tarifs
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-primary transition-colors text-sm">
                  Nos Services
                </Link>
              </li>
              <li>
                <Link href="/examen-permis" className="text-gray-300 hover:text-primary transition-colors text-sm">
                  Processus d'examen
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-primary transition-colors text-sm">
                  Contactez-nous
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  Agoè Vakpossito, à 100m du Carrefour Fish<br />
                  Vers le Bar Mombassa<br />
                  Lomé, Togo
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+22890865351" className="text-gray-300 hover:text-white transition-colors text-sm">+228 90 86 53 51</a>
                  <a href="tel:+22899774070" className="text-gray-300 hover:text-white transition-colors text-sm">+228 99 77 40 70</a>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                <a href="mailto:codelacapitale@gmail.com" className="text-gray-300 hover:text-white transition-colors text-sm">
                  codelacapitale@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-xs">
            &copy; {new Date().getFullYear()} Auto-École La Capitale. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
