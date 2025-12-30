import Link from "next/link";
import { CheckCircle, Car, BookOpen, Clock, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-secondary text-white py-20 lg:py-32 overflow-hidden">
        {/* Abstract Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            <span className="block text-white">Ton Permis ?</span>
            <span className="block text-primary mt-2">Tu l'as !</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-10 font-light">
            "Si non, contacte-nous." La formation de qualité pour une route plus sûre à Lomé.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-primary text-white font-bold rounded-lg shadow-lg hover:bg-rose-700 transition transform hover:-translate-y-1 text-lg"
            >
              Je m'inscris maintenant
            </Link>
            <Link
              href="/formations"
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-secondary transition transform hover:-translate-y-1 text-lg"
            >
              Voir les Tarifs
            </Link>
          </div>
          <div className="mt-12 flex justify-center items-center space-x-2 text-accent bg-white/10 backdrop-blur-sm py-2 px-6 rounded-full w-fit mx-auto">
            <ShieldCheck className="h-6 w-6" />
            <span className="font-semibold text-sm md:text-base">Agrément Officiel N° 020/MTRAF/META</span>
          </div>
        </div>
      </section>

      {/* Introduction / Trust Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-secondary mb-8">Pourquoi choisir La Capitale ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-xl hover:shadow-md transition">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">École Agréée</h3>
              <p className="text-gray-600">Reconnue par l'État (Arrêté Interministériel), nous garantissons une formation conforme aux normes de sécurité.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl hover:shadow-md transition">
              <div className="w-14 h-14 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-brand-blue" />
              </div>
              <h3 className="text-xl font-bold mb-2">Formation Complète</h3>
              <p className="text-gray-600">Code, Conduite, Mécanique et Secourisme. Nous ne formons pas seulement des conducteurs, mais des usagers responsables.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl hover:shadow-md transition">
              <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2">Flexibilité</h3>
              <p className="text-gray-600">Des formules adaptées à votre emploi du temps : formations complètes, accélérées ou perfectionnement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary">Nos Formations Phares</h2>
            <p className="text-gray-600 mt-4">Des solutions pour tous les besoins et tous les budgets.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100 flex flex-col hover:shadow-lg transition">
              <div className="h-3 bg-brand-blue w-full"></div>
              <div className="p-8 flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Permis B - Classique</h3>
                <p className="text-gray-500 mb-6 text-sm">Idéal pour apprendre à votre rythme.</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-accent mr-3" /> Code & Théorie
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-accent mr-3" /> 12 Leçons de Conduite
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-accent mr-3" /> Mécanique & Secourisme
                  </li>
                </ul>
              </div>
              <div className="p-8 bg-gray-50 border-t border-gray-100 mt-auto">
                <Link href="/formations" className="block w-full text-center py-3 px-4 bg-white border border-gray-300 rounded-md text-secondary font-bold hover:bg-gray-50 transition">
                  En savoir plus
                </Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-primary flex flex-col transform scale-105 z-10">
              <div className="bg-primary py-2 text-center text-white text-xs font-bold uppercase tracking-wider">
                Recommandé
              </div>
              <div className="p-8 flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Permis B - Pro</h3>
                <p className="text-gray-500 mb-6 text-sm">Pour une maîtrise totale de la route.</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-accent mr-3" /> Code Illimité
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-accent mr-3" /> <span className="font-bold">20 Leçons</span> de Conduite
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-accent mr-3" /> Mécanique & Secourisme
                  </li>
                </ul>
              </div>
              <div className="p-8 bg-gray-50 border-t border-gray-100 mt-auto">
                <Link href="/formations" className="block w-full text-center py-3 px-4 bg-primary text-white rounded-md font-bold hover:bg-rose-700 transition">
                  Voir les détails
                </Link>
              </div>
            </div>

             {/* Card 3 */}
             <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100 flex flex-col hover:shadow-lg transition">
              <div className="h-3 bg-accent w-full"></div>
              <div className="p-8 flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Formation Accélérée</h3>
                <p className="text-gray-500 mb-6 text-sm">Votre permis en 2 à 4 semaines.</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-accent mr-3" /> Cours Intensifs
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-accent mr-3" /> Priorité Planning
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-accent mr-3" /> Rapidité & Efficacité
                  </li>
                </ul>
              </div>
              <div className="p-8 bg-gray-50 border-t border-gray-100 mt-auto">
                <Link href="/formations" className="block w-full text-center py-3 px-4 bg-white border border-gray-300 rounded-md text-secondary font-bold hover:bg-gray-50 transition">
                  En savoir plus
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/formations" className="inline-flex items-center text-primary font-bold hover:text-rose-700">
              Découvrir tous nos tarifs <Car className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-primary rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-brand-blue rounded-full opacity-20 blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à prendre la route ?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Rejoignez les centaines d'élèves qui ont obtenu leur permis avec Auto-École La Capitale.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-secondary font-bold rounded-lg shadow hover:bg-gray-100 transition transform hover:-translate-y-1"
            >
              Contactez-nous
            </Link>
            <a
              href="tel:+22890865351"
              className="px-8 py-4 bg-transparent border border-white text-white font-bold rounded-lg hover:bg-white/10 transition"
            >
              Appeler le 90 86 53 51
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
