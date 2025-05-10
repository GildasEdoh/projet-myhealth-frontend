import Header from '@/components/header';
import Footer from '@/components/footer';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import ServiceCard from '@/components/service-card';
import Image from 'next/image';
import { Card } from '@/components/ui/card';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header activeLink="accueil" />
      
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-4">
                La plateforme pour professionnels de santé et établissements hospitaliers
              </h1>
              <p className="text-gray-600 mb-8">
                Simplifiez la gestion des patients, les rendez-vous et optimisez votre pratique
                médicale grâce à notre solution tout-en-un.
              </p>
              <Link href="/auth/login">
                <Button className="bg-blue-500 hover:bg-blue-600">Démarrer ici 🚀</Button>
              </Link>
              <Button variant="outline" className="ml-4">Découvrir nos services</Button>
            </div>
            <div className="relative h-[300px] md:h-[400px]">
              <div className="absolute inset-0 bg-blue-100 rounded-lg overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/5214958/pexels-photo-5214958.jpeg" 
                  alt="Médecin professionnel" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-12">Nos services</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Découvrez comment MyHealth révolutionne la gestion hospitalière et médicale
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard 
              icon="users"
              title="Gestion des patients"
              description="Centralisez toutes les informations, accédez aux dossiers médicaux et suivez l'historique des consultations."
            />
            
            <ServiceCard 
              icon="calendar"
              title="Rendez-vous intelligents"
              description="Organisez votre emploi du temps et permettez aux patients de prendre RDV via l'application mobile, avec notifications."
            />
            
            <ServiceCard 
              icon="droplet"
              title="Gestion des dons de sang"
              description="Organisez votre gestion du stock et permettez aux donneurs de prendre RDV via l'application mobile, avec notifications."
            />
            
            <ServiceCard 
              icon="bar-chart"
              title="Statistiques et analyses"
              description="Visualisez les tendances, suivez l'activité de votre établissement et prenez des décisions éclairées grâce à ces données automatiquement."
            />
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}