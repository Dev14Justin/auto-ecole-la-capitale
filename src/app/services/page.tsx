import Link from 'next/link';
import { Car, FileText, Shield, Monitor, Wifi, Tv } from 'lucide-react';

export const metadata = {
  title: 'Nos Services - Auto-École La Capitale',
  description: 'Plus que le permis : Carte Grise, Assurance, Plaques d\'immatriculation, Canal+ et Wifi à Lomé.',
};

export default function ServicesPage() {
  const roadServices = [
    {
      title: "Mutation Carte Grise",
      description: "Nous gérons les démarches administratives pour le changement de propriétaire.",
      icon: <FileText className="w-10 h-10 text-brand-blue" />,
    },
    {
      title: "Carte Grise Perdue",
      description: "Assistance pour la demande de duplicata en cas de perte ou de vol.",
      icon: <FileText className="w-10 h-10 text-gray-400" />,
    },
    {
      title: "Plaques d'Immatriculation",
      description: "Service rapide pour vos nouvelles plaques conformes.",
      icon: <Car className="w-10 h-10 text-secondary" />,
    },
    {
      title: "Assurance Auto",
      description: "Souscription et conseils pour assurer votre véhicule.",
      icon: <Shield className="w-10 h-10 text-accent" />,
    },
    {
      title: "Visite Technique",
      description: "Préparation et accompagnement pour le contrôle technique.",
      icon: <Car className="w-10 h-10 text-primary" />,
    },
  ];

  const otherServices = [
    {
      title: "CANAL+ / CANAL BOX",
      description: "Point de réabonnement officiel. Renouvelez vos bouquets rapidement.",
      icon: <Tv className="w-10 h-10 text-yellow-500" />,
    },
    {
      title: "WIFI LA CAPITALE",
      description: "Service d'accès internet haut débit.",
      icon: <Wifi className="w-10 h-10 text-brand-blue" />,
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <div className="bg-secondary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Nos Services Complémentaires</h1>
          <p className="text-xl text-gray-300">
            L'Auto-École La Capitale, c'est aussi un centre de services pour faciliter votre quotidien d'automobiliste.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Road Services */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-secondary mb-10 text-center relative inline-block w-full">
            <span className="relative z-10 bg-white px-4">Services Routiers & Administratifs</span>
            <span className="absolute left-0 top-1/2 w-full h-px bg-gray-200 -z-0"></span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roadServices.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-md transition border border-gray-100 group">
                <div className="mb-4 bg-white w-20 h-20 rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Other Services */}
        <div>
          <h2 className="text-3xl font-bold text-secondary mb-10 text-center relative inline-block w-full">
            <span className="relative z-10 bg-white px-4">Autres Services</span>
            <span className="absolute left-0 top-1/2 w-full h-px bg-gray-200 -z-0"></span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {otherServices.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-md transition border border-gray-100 flex items-start">
                <div className="mr-6 flex-shrink-0">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
           <Link href="/contact" className="inline-block px-8 py-4 bg-primary text-white font-bold rounded-lg shadow-lg hover:bg-rose-700 transition">
             Demander un renseignement
           </Link>
        </div>
      </div>
    </div>
  );
}
