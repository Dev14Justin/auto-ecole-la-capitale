import Link from "next/link";
import Image from "next/image";
import { CheckCircle, Car, BookOpen, Clock, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-secondary text-white py-20 lg:py-32 overflow-hidden">
        {/* Abstract Background pattern */}
        <div className="absolute inset-0">
          <Image
            src="/au-ec-capi.jpg"
            alt="Photo de fond"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          {/* Calque couleur (baisse/monte l'opacité ici) */}
          <div className="absolute inset-0 bg-secondary/80" />
          {/* Optionnel: effet radial par-dessus le calque */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-white/10 via-black/40 to-black/80" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            <span className="block text-white">Votre Permis de Conduire</span>
            <span className="block text-primary mt-2">Notre Engagement</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-10 font-light">
            Formation de qualité, moniteurs expérimentés et accompagnement
            personnalisé pour votre réussite à Lomé.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-primary text-white font-bold rounded-lg shadow-lg hover:bg-rose-700 transition transform hover:-translate-y-1 text-lg"
            >
              Je m&apos;inscris maintenant
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
            <span className="font-semibold text-sm md:text-base">
              Agrément Officiel N° 020/MTRAF/META
            </span>
          </div>
        </div>
      </section>

      {/* Introduction / Trust Section (About Style) */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="text-primary font-bold uppercase tracking-wider text-sm mb-2">
              À propos de nous
            </h2>
            <h2 className="text-3xl md:text-4xl font-extrabold text-secondary leading-tight">
              Plus qu&apos;une Auto-École, un <br /> partenaire pour votre
              réussite.
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Image Column */}
            <div className="w-full lg:w-1/2 relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl transform transition hover:scale-[1.02] duration-500">
                <Image
                  src="/local.jpeg"
                  alt="Notre agence"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-lg border border-gray-100 hidden md:block z-20">
                <div className="flex items-center gap-4">
                  <div className="bg-accent/10 p-3 rounded-full">
                    <CheckCircle className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-secondary">99%</p>
                    <p className="text-gray-500 text-xs uppercase tracking-wider font-semibold">
                      Taux de réussite
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="w-full lg:w-1/2 space-y-8">
              <div>
                <p className="mt-4 text-gray-600 text-lg leading-relaxed">
                  Depuis plusieurs années, l&apos;Auto-École La Capitale
                  s&apos;engage à offrir une formation d&apos;excellence à Lomé.
                  Nous ne nous contentons pas de vous préparer à l&apos;examen,
                  nous formons les conducteurs responsables de demain.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6">
                <div className="flex items-start gap-4 group p-4 rounded-xl hover:bg-gray-50 transition duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                    <ShieldCheck className="w-6 h-6 text-primary group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-secondary">
                      École Agréée
                    </h3>
                    <p className="text-gray-600">
                      Structure reconnue officiellement garantissant une
                      formation conforme aux normes d&apos;État.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group p-4 rounded-xl hover:bg-gray-50 transition duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center group-hover:bg-brand-blue transition-colors duration-300">
                    <BookOpen className="w-6 h-6 text-brand-blue group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-secondary">
                      Formation Complète
                    </h3>
                    <p className="text-gray-600">
                      Code, Conduite, Mécanique et Secourisme inclus dans nos
                      cursus pour une sécurité totale.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group p-4 rounded-xl hover:bg-gray-50 transition duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                    <Clock className="w-6 h-6 text-accent group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-secondary">
                      Flexibilité Optimale
                    </h3>
                    <p className="text-gray-600">
                      Planning sur mesure, cours accélérés ou perfectionnement
                      selon vos disponibilités.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary">
              Nos Formations Phares
            </h2>
            <p className="text-gray-600 mt-4">
              Des solutions pour tous les besoins et tous les budgets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100 flex flex-col hover:shadow-lg transition">
              <div className="h-3 bg-brand-blue w-full"></div>
              <div className="p-8 grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Formation Argent
                </h3>
                <p className="text-gray-500 text-sm">
                  Idéal pour apprendre à votre rythme.
                </p>
                <p className="text-gray-500 mb-6 text-sm">
                  2 à 3 mois de formation
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-accent mr-3" /> Code &
                    Théorie
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-accent mr-3" /> 12
                    Leçons de Conduite
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-accent mr-3" />{" "}
                    Mécanique & Secourisme
                  </li>
                </ul>
              </div>
              <div className="p-8 bg-gray-50 border-t border-gray-100 mt-auto">
                <Link
                  href="/formations"
                  className="block w-full text-center py-3 px-4 bg-white border border-gray-300 rounded-md text-secondary font-bold hover:bg-gray-50 transition"
                >
                  En savoir plus
                </Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-primary flex flex-col transform scale-105 z-10">
              <div className="bg-primary py-2 text-center text-white text-xs font-bold uppercase tracking-wider">
                Recommandé
              </div>
              <div className="p-8 grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Formation Gold
                </h3>
                <p className="text-gray-500 text-sm">
                  Pour une maîtrise totale de la route.
                </p>
                <p className="text-gray-500 mb-6 text-sm">
                  2 à 3 mois de formation
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-accent mr-3" /> Code
                    Illimité
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-accent mr-3" />{" "}
                    <span className="font-bold">20 Leçons</span> de Conduite
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-accent mr-3" />{" "}
                    Mécanique & Secourisme
                  </li>
                </ul>
              </div>
              <div className="p-8 bg-gray-50 border-t border-gray-100 mt-auto">
                <Link
                  href="/formations"
                  className="block w-full text-center py-3 px-4 bg-primary text-white rounded-md font-bold hover:bg-rose-700 transition"
                >
                  Voir les détails
                </Link>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100 flex flex-col hover:shadow-lg transition">
              <div className="h-3 bg-accent w-full"></div>
              <div className="p-8 grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Formation Diamant
                </h3>
                <p className="text-gray-500 mb-6 text-sm">
                  Votre permis en 2 à 4 semaines.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-accent mr-3" /> Cours
                    Intensifs
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-accent mr-3" />{" "}
                    Priorité Planning
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-accent mr-3" />{" "}
                    Rapidité & Efficacité
                  </li>
                </ul>
              </div>
              <div className="p-8 bg-gray-50 border-t border-gray-100 mt-auto">
                <Link
                  href="/formations"
                  className="block w-full text-center py-3 px-4 bg-white border border-gray-300 rounded-md text-secondary font-bold hover:bg-gray-50 transition"
                >
                  En savoir plus
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/formations"
              className="inline-flex items-center text-primary font-bold hover:text-rose-700"
            >
              Découvrir tous nos tarifs <Car className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/cta-acceuil.jpeg"
            alt="Conduite"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-secondary/85" />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent opacity-60" />
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Prêt à prendre la route ?
          </h2>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
            Rejoignez les centaines d&apos;élèves qui ont obtenu leur permis
            avec Auto-École La Capitale. Profitez d&apos;un accompagnement sur
            mesure pour votre succès.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="px-10 py-4 bg-primary text-white font-bold rounded-lg shadow-xl hover:bg-rose-700 transition transform hover:-translate-y-1 text-lg"
            >
              Contactez-nous
            </Link>
            <a
              href="tel:+22890865351"
              className="px-10 py-4 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white font-bold rounded-lg hover:bg-white/20 transition transform hover:-translate-y-1 text-lg"
            >
              Appeler le 90 86 53 51
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
