import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  Facebook,
  Instagram,
  Twitter,
  MessageCircle,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Brand & About */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <div className="flex items-center gap-3">
                <div className="bg-white p-2 rounded-lg">
                  <Image
                    src="/logo.jpg"
                    alt="Logo"
                    width={40}
                    height={40}
                    className="h-10 w-auto"
                  />
                </div>
                <span className="text-xl font-black uppercase tracking-tighter">
                  Auto-École La Capitale
                </span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Votre partenaire de confiance pour l&apos;obtention de votre
              permis de conduire à Lomé. Une formation d&apos;excellence pour
              des conducteurs responsables.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 bg-gray-800 rounded-full hover:bg-primary transition-colors text-white"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-800 rounded-full hover:bg-primary transition-colors text-white"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://wa.me/22890865351"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-green-600 transition-colors text-white"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <div className="w-2 h-2 bg-primary"></div>
              Navigation
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Accueil", href: "/" },
                { name: "Formations & Tarifs", href: "/formations" },
                { name: "Nos Services", href: "/services" },
                { name: "Processus d'examen", href: "/examen-permis" },
                { name: "Contactez-nous", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <div className="w-2 h-2 bg-primary"></div>
              Contact
            </h3>
            <div className="space-y-4">
              <div className="flex items-start group">
                <MapPin className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                  Agoè Vakpossito, 100m du Carrefour Fish, vers Bar Mombassa.
                  Lomé, Togo
                </span>
              </div>
              <div className="flex items-center group">
                <Phone className="h-5 w-5 text-primary mr-3 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <div className="flex flex-col">
                  <a
                    href="tel:+22890865351"
                    className="text-gray-400 hover:text-white transition-colors text-sm font-semibold"
                  >
                    +228 90 86 53 51
                  </a>
                  <a
                    href="tel:+22899774070"
                    className="text-gray-400 hover:text-white transition-colors text-sm font-semibold"
                  >
                    +228 99 77 40 70
                  </a>
                </div>
              </div>
              <div className="flex items-center group">
                <Mail className="h-5 w-5 text-primary mr-3 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <a
                  href="mailto:codelacapitale@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors text-sm font-semibold overflow-hidden text-ellipsis"
                >
                  codelacapitale@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Opening Hours & Trust */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <div className="w-2 h-2 bg-primary"></div>
                Horaires
              </h3>
              <ul className="text-sm text-gray-400 space-y-2">
                <li className="flex justify-between border-b border-gray-800 pb-1">
                  <span>Lun - Ven</span>
                  <span className="text-white font-medium">08:00 - 18:00</span>
                </li>
                <li className="flex justify-between border-b border-gray-800 pb-1">
                  <span>Samedi</span>
                  <span className="text-white font-medium">08:00 - 13:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Dimanche</span>
                  <span className="text-gray-500 italic">Fermé</span>
                </li>
              </ul>
            </div>
            <div className="p-4 bg-gray-900 rounded-xl border border-gray-800 flex items-center gap-3">
              <div className="bg-primary/20 p-2 rounded-lg">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">
                  Agrément National
                </p>
                <p className="text-xs text-white font-bold">
                  N° 020/MTRAF/META
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs font-medium">
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-gray-300">Auto-École La Capitale</span>.
            Tous droits réservés.
          </p>
          <div className="flex gap-6 text-xs text-gray-500 font-medium">
            <Link href="https://p5sog.vercel.app" className="hover:text-white transition-colors">
              Propulser par 
              <span className="text-gray-300"> P5SOG</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
