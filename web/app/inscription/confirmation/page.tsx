"use client"

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

export default function RegistrationConfirmation() {
  const router = useRouter();
  
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="border-0 shadow-md overflow-hidden">
              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-8 w-8 text-green-500" />
                </div>
                
                <h1 className="text-2xl font-bold text-gray-800 mb-4">
                  Inscription réussie !
                </h1>
                
                <p className="text-gray-600 mb-8">
                  Votre inscription a été enregistrée avec succès. Notre équipe va examiner votre demande et vous contactera prochainement pour finaliser l'activation de votre compte.
                </p>
                
                <div className="bg-blue-50 p-6 rounded-lg mb-8">
                  <h2 className="text-lg font-medium text-gray-800 mb-2">
                    Prochaines étapes
                  </h2>
                  <ul className="text-left space-y-3 text-sm text-gray-600">
                    <li className="flex items-start">
                      <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-blue-500 text-xs font-medium">1</span>
                      </div>
                      <span>Vérification des informations par notre équipe</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-blue-500 text-xs font-medium">2</span>
                      </div>
                      <span>Email de confirmation avec vos identifiants d'accès</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-blue-500 text-xs font-medium">3</span>
                      </div>
                      <span>Configuration de votre espace établissement</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-blue-500 text-xs font-medium">4</span>
                      </div>
                      <span>Formation en ligne pour vous et votre équipe</span>
                    </li>
                  </ul>
                </div>
                
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button 
                    onClick={() => router.push('/')}
                    className="bg-blue-500 hover:bg-blue-600"
                  >
                    Retour à l'accueil
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => router.push('/contacts')}
                  >
                    Contactez-nous
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}