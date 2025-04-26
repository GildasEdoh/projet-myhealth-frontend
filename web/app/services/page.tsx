import Header from '@/components/header';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import ServiceFeature from '@/components/service-feature';
import Image from 'next/image';

export default function Services() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header activeLink="services" />
      
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-800 text-center mb-12">Nos services</h1>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-center text-gray-600 mb-12">
              Découvrez comment MyHealth révolutionne la gestion hospitalière et médicale
              avec des solutions innovantes pour les professionnels de santé et les établissements.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <ServiceFeature 
                icon="users"
                title="Gestion des patients" 
                description="Centralisez toutes les informations, accédez aux dossiers médicaux, gérez les traitements et suivez l'historique des consultations. Le système permet un accès sécurisé aux dossiers médicaux complets."
                features={[
                  "Dossier médical complet",
                  "Historique des consultations", 
                  "Gestion des traitements",
                  "Accès sécurisé"
                ]}
              />
              
              <ServiceFeature 
                icon="calendar"
                title="Rendez-vous intelligents" 
                description="Organisez votre emploi du temps et permettez aux patients de prendre RDV via l'application mobile. Les notifications et rappels automatiques réduisent les rendez-vous manqués."
                features={[
                  "Prise de rendez-vous en ligne",
                  "Notifications automatiques", 
                  "Calendrier synchronisé",
                  "Rappels pour les patients"
                ]}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <ServiceFeature 
                icon="droplet"
                title="Gestion des dons de sang" 
                description="Optimisez votre gestion des campagnes de don de sang. Suivez les stocks disponibles et permettez aux donneurs de s'inscrire facilement via l'application mobile."
                features={[
                  "Organisation des campagnes",
                  "Gestion des stocks sanguins", 
                  "Inscription des donneurs",
                  "Suivi des collectes"
                ]}
              />
              
              <ServiceFeature 
                icon="bar-chart"
                title="Statistiques et analyses" 
                description="Visualisez les tendances, suivez l'activité de votre établissement et prenez des décisions éclairées grâce à nos tableaux de bord analytiques actualisés en temps réel."
                features={[
                  "Tableaux de bord en temps réel",
                  "Rapports personnalisables", 
                  "Analyse des tendances",
                  "Métriques de performance"
                ]}
              />
            </div>
            
            <div className="text-center">
              <Button className="bg-blue-500 hover:bg-blue-600">
                Commencer maintenant
              </Button>
              <Button variant="outline" className="ml-4">
                Contactez-nous
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Pourquoi choisir MyHealth?
                </h2>
                <p className="text-gray-600 mb-6">
                  Notre plateforme offre des avantages uniques aux professionnels de santé et aux établissements hospitaliers.
                </p>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">Solution complète et intégrée</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">Sécurité et confidentialité des données</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">Interface intuitive et facile à utiliser</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">Support technique réactif et formation incluse</span>
                  </li>
                </ul>
                
                <Button className="bg-blue-500 hover:bg-blue-600">Demander une démo</Button>
              </div>
              
              <div className="bg-blue-50 p-8 md:p-12 flex items-center justify-center">
                <div className="text-center">
                  <div className="mb-6">
                    <div className="inline-block w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-2">+500 établissements</h3>
                  <p className="text-gray-600 mb-6">
                    Font confiance à MyHealth pour optimiser leur gestion quotidienne
                  </p>
                  
                  <div className="mb-6">
                    <div className="inline-block w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                        <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                        <path d="M12 8v8"></path>
                        <path d="M8 12h8"></path>
                      </svg>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-2">+2,000 professionnels</h3>
                  <p className="text-gray-600">
                    Utilisent quotidiennement nos services pour améliorer leur pratique
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}