import Link from 'next/link';
import { CheckCircle, AlertCircle } from 'lucide-react';

export const metadata = {
  title: 'Formations & Tarifs - Auto-École La Capitale',
  description: 'Découvrez nos tarifs pour le permis de conduire à Lomé. Formations complètes, accélérées, recyclage et perfectionnement.',
};

export default function FormationsPage() {
  const formations = [
    {
      title: "Formation Complète (Base)",
      price: "80 000 F CFA",
      features: [
        "Cours de Code, Mécanique, Secourisme",
        "12 Leçons de Conduite",
        "Accompagnement examen"
      ],
      recommended: false,
    },
    {
      title: "Formation Complète (Pro)",
      price: "110 000 F CFA",
      features: [
        "Cours de Code, Mécanique, Secourisme",
        "20 Leçons de Conduite",
        "Accompagnement examen",
        "Maîtrise approfondie"
      ],
      recommended: true,
    },
    {
      title: "Formation Accélérée (Base)",
      price: "100 000 F CFA",
      features: [
        "Durée: 2 à 4 semaines",
        "Code, Mécanique, Secourisme",
        "12 Leçons de Conduite",
        "Priorité planning"
      ],
      recommended: false,
    },
    {
      title: "Formation Accélérée (Pro)",
      price: "130 000 F CFA",
      features: [
        "Durée: 2 à 4 semaines",
        "Code, Mécanique, Secourisme",
        "20 Leçons de Conduite",
        "Formation intensive"
      ],
      recommended: false,
    },
  ];

  const extras = [
    { name: "Recyclage", price: "50 000 F CFA", desc: "Code + 2 Leçons de conduite" },
    { name: "Perfectionnement", price: "5 000 F CFA / Heure", desc: "Eco-conduite, Conduite souple/sportive" },
    { name: "Pack de Conduite", price: "5 000 F CFA", desc: "1 Séance de conduite à la carte" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Header */}
      <div className="bg-secondary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Nos Formations & Tarifs</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Des formules transparentes et adaptées à tous les niveaux. 
            Aucun frais caché.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        {/* Important Info Card */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-12 border-l-4 border-accent flex items-start">
          <AlertCircle className="h-6 w-6 text-accent mr-4 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-bold text-lg mb-1">Frais d'inscription</h3>
            <p className="text-gray-600">
              Des frais de dossier de <span className="font-bold text-secondary">5 000 F CFA</span> s'appliquent à l'inscription pour l'ouverture de votre dossier.
            </p>
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {formations.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-xl shadow-sm overflow-hidden border flex flex-col ${
                plan.recommended ? 'border-primary ring-2 ring-primary ring-opacity-50 relative' : 'border-gray-200'
              }`}
            >
              {plan.recommended && (
                <div className="bg-primary text-white text-xs font-bold uppercase tracking-wider text-center py-1">
                  Meilleur Choix
                </div>
              )}
              <div className="p-6 flex-grow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{plan.title}</h3>
                <div className="text-3xl font-extrabold text-brand-blue mb-6">{plan.price}</div>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 pt-0 mt-auto">
                <Link 
                  href="/contact" 
                  className={`block w-full text-center py-2 px-4 rounded-md font-bold text-sm transition ${
                    plan.recommended 
                      ? 'bg-primary text-white hover:bg-rose-700' 
                      : 'bg-gray-100 text-secondary hover:bg-gray-200'
                  }`}
                >
                  Choisir cette formule
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Other Services Table */}
        <div className="bg-white rounded-xl shadow overflow-hidden mb-12">
          <div className="px-6 py-4 border-b border-gray-100 bg-gray-50">
            <h2 className="text-xl font-bold text-secondary">Services à la carte</h2>
          </div>
          <div className="divide-y divide-gray-100">
            {extras.map((extra, index) => (
              <div key={index} className="px-6 py-4 flex flex-col sm:flex-row justify-between items-center hover:bg-gray-50 transition">
                <div className="mb-2 sm:mb-0 text-center sm:text-left">
                  <span className="block font-bold text-gray-900">{extra.name}</span>
                  <span className="text-sm text-gray-500">{extra.desc}</span>
                </div>
                <div className="font-bold text-brand-blue bg-blue-50 px-3 py-1 rounded-full text-sm">
                  {extra.price}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-secondary to-gray-800 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Besoin d'aide pour choisir ?</h2>
          <p className="mb-8 text-gray-300">Passez nous voir à l'agence pour discuter de la formule la mieux adaptée à vos besoins.</p>
          <div className="flex justify-center gap-4">
            <a href="tel:+22890865351" className="bg-white text-secondary px-6 py-3 rounded-md font-bold hover:bg-gray-100 transition">
              Appeler
            </a>
            <Link href="/contact" className="border border-white text-white px-6 py-3 rounded-md font-bold hover:bg-white/10 transition">
              Nous localiser
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
