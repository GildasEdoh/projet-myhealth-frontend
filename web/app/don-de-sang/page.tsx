import Header from '@/components/header';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Shield, Smartphone, Activity } from 'lucide-react';

export default function BloodDonation() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header activeLink="don-de-sang" />
      
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="py-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border shadow-sm">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-md font-medium">
                      <Shield className="h-5 w-5 text-blue-500 inline-block mr-2" />
                      Sécurité des données
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-gray-600">
                      Protégez les informations des donneurs avec un système conforme aux réglementations et des mécanismes de sécurité avancés.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border shadow-sm">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-md font-medium">
                      <Smartphone className="h-5 w-5 text-blue-500 inline-block mr-2" />
                      Application mobile
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-gray-600">
                      Permettez à vos patients de prendre rendez-vous facilement, d'accéder à leurs informations et de suivre leur santé.
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="mt-8 text-center">
                <div className="bg-red-100 rounded-full w-32 h-32 mx-auto flex items-center justify-center mb-2">
                  <div className="text-red-600 font-bold">
                    <div className="text-xs uppercase">WORLD BLOOD</div>
                    <div className="text-xl">DONOR</div>
                    <div className="text-xl">DAY</div>
                  </div>
                </div>
                <div className="bg-red-500 rounded-full w-20 h-20 mx-auto flex items-center justify-center mt-4 text-white text-3xl font-bold">
                  A+
                </div>
              </div>
            </div>
            
            <div className="bg-red-50 p-8 rounded-lg">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Optimisez la gestion des dons de sang
              </h2>
              <p className="text-gray-600 mb-6">
                Notre plateforme permet aux établissements de santé de gérer efficacement les campagnes de don de sang, de suivre les stocks disponibles et d'alerter les donneurs potentiels.
              </p>
              <div className="border-t border-gray-200 pt-4 mt-4">
                <p className="text-gray-700 mb-4">
                  Les médecins peuvent superviser les collectes, tandis que les patients peuvent s'inscrire facilement via l'application mobile.
                </p>
                <Button className="bg-red-500 hover:bg-red-600">En savoir plus</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-12">
            Comment fonctionne notre système de don de sang
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white hover:shadow-md transition-shadow border">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-red-500 font-bold text-xl">1</span>
                </div>
                <CardTitle className="text-lg">Inscription des donneurs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Les donneurs potentiels peuvent s'inscrire via l'application mobile ou sur le site web en remplissant un formulaire simple.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white hover:shadow-md transition-shadow border">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-red-500 font-bold text-xl">2</span>
                </div>
                <CardTitle className="text-lg">Planification des collectes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Les établissements peuvent planifier des campagnes de don, définir des objectifs et envoyer des notifications aux donneurs éligibles.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white hover:shadow-md transition-shadow border">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-red-500 font-bold text-xl">3</span>
                </div>
                <CardTitle className="text-lg">Gestion des stocks</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Suivez en temps réel les niveaux de stock de chaque groupe sanguin et recevez des alertes lorsque les réserves sont basses.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}