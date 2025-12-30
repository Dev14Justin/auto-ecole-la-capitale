import Link from 'next/link';
import { BookOpen, FileCheck, Award, CreditCard, UserCheck, Clock } from 'lucide-react';

export const metadata = {
  title: 'Processus d\'Examen - Auto-École La Capitale',
  description: 'Les 5 étapes pour obtenir votre permis de conduire au Togo. De l\'inscription à la délivrance du permis définitif.',
};

export default function ExamenPage() {
  const steps = [
    {
      id: 1,
      title: "Formation Théorique & Pratique",
      duration: "2 semaines à 3 mois",
      icon: <BookOpen className="w-8 h-8 text-white" />,
      content: "Apprentissage du Code de la route, notions de mécanique et de secourisme. Pratique de la conduite avec nos moniteurs agréés.",
      color: "bg-brand-blue"
    },
    {
      id: 2,
      title: "Constitution du Dossier",
      duration: "2 semaines (traitement)",
      icon: <FileCheck className="w-8 h-8 text-white" />,
      content: (
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>Photocopie CNI ou Passeport</li>
          <li>Acte de Naissance</li>
          <li>2 Photos d'identité</li>
          <li><strong>Frais de Quittance : 30 000 F CFA</strong></li>
        </ul>
      ),
      color: "bg-secondary"
    },
    {
      id: 3,
      title: "Examen",
      duration: "1 mois (planification)",
      icon: <UserCheck className="w-8 h-8 text-white" />,
      content: "Passage de l'examen théorique (Code) puis de l'examen pratique (Conduite) devant les inspecteurs.",
      color: "bg-primary"
    },
    {
      id: 4,
      title: "Permis Provisoire",
      duration: "1 mois après réussite",
      icon: <Clock className="w-8 h-8 text-white" />,
      content: "Délivrance d'un titre provisoire vous autorisant à conduire en attendant le document final.",
      color: "bg-accent"
    },
    {
      id: 5,
      title: "Permis Définitif",
      duration: "4 mois après le provisoire",
      icon: <Award className="w-8 h-8 text-white" />,
      content: "Réception de votre carte de permis de conduire définitive.",
      color: "bg-green-700"
    },
  ];

  return (
    <div className="bg-white min-h-screen">
       <div className="bg-secondary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Le Parcours vers le Permis</h1>
          <p className="text-xl text-gray-300">
            Un processus clair et balisé en 5 étapes clés.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="relative">
          {/* Vertical line for desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>

          {steps.map((step, index) => (
            <div key={step.id} className={`flex flex-col md:flex-row items-center mb-16 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
              
              {/* Timeline Node */}
              <div className={`absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full border-4 border-white shadow-lg flex items-center justify-center z-10 ${step.color} hidden md:flex`}>
                <span className="font-bold text-white">{step.id}</span>
              </div>

              {/* Content Side */}
              <div className="w-full md:w-1/2 p-4 md:px-10">
                 <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition relative">
                   {/* Mobile Badge */}
                   <div className={`md:hidden absolute -top-5 left-6 w-10 h-10 rounded-full flex items-center justify-center shadow-lg ${step.color}`}>
                     <span className="font-bold text-white">{step.id}</span>
                   </div>

                   <div className="flex items-center mb-4 mt-2 md:mt-0">
                     <div className={`p-2 rounded-lg mr-4 ${step.color} bg-opacity-90`}>
                        {step.icon}
                     </div>
                     <div>
                       <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                       <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">{step.duration}</span>
                     </div>
                   </div>
                   <div className="text-gray-600 leading-relaxed">
                     {step.content}
                   </div>
                 </div>
              </div>

              {/* Spacer for alternate side */}
              <div className="w-full md:w-1/2"></div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 border border-blue-100 rounded-xl p-8 text-center">
          <h3 className="text-xl font-bold text-brand-blue mb-2">Prêt à commencer l'étape 1 ?</h3>
          <p className="text-gray-600 mb-6">Inscrivez-vous dès aujourd'hui et commencez votre formation.</p>
          <Link href="/contact" className="inline-block px-8 py-3 bg-brand-blue text-white font-bold rounded-lg hover:bg-blue-700 transition">
            Je m'inscris
          </Link>
        </div>
      </div>
    </div>
  );
}
