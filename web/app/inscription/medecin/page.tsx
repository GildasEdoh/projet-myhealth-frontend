"use client"

import { useState } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useRouter } from 'next/navigation';

export default function DoctorRegistration() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  
  const handleNextStep = () => {
    if (step === 1) {
      setStep(2);
    } else {
      router.push('/inscription/confirmation');
    }
  };
  
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      <section className="py-8 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="border-0 shadow-md overflow-hidden">
              <div className="bg-blue-500 p-4 text-white">
                <h1 className="text-xl font-medium">Inscription Médecin</h1>
                <p className="text-sm opacity-90">Rejoignez notre plateforme pour améliorer votre pratique médicale</p>
              </div>
              
              {step === 1 ? (
                <div className="p-6">
                  <div className="mb-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
                          <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path>
                          <path d="M3 9V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4"></path>
                        </svg>
                      </div>
                      <div>
                        <h2 className="text-lg font-medium text-gray-800">Informations sur l'établissement</h2>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <Label htmlFor="establishmentType">Type d'établissement</Label>
                        <Input id="establishmentType" placeholder="Clinique, Hôpital, Centre médical..." />
                      </div>
                      <div>
                        <Label htmlFor="establishmentName">Nom de l'établissement</Label>
                        <Input id="establishmentName" placeholder="Nom complet de l'établissement" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <Label htmlFor="address">Adresse</Label>
                        <Input id="address" placeholder="Adresse complète" />
                      </div>
                      <div>
                        <Label htmlFor="city">Ville</Label>
                        <Input id="city" placeholder="Ville" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                      </div>
                      <div>
                        <h2 className="text-lg font-medium text-gray-800">Coordonnées de l'établissement</h2>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Téléphone</Label>
                        <Input id="phone" placeholder="+X XXX XX XX XX" />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="contact@etablissement.com" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                          <circle cx="9" cy="7" r="4"></circle>
                          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                      </div>
                      <div>
                        <h2 className="text-lg font-medium text-gray-800">Informations personnelles</h2>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <Label htmlFor="matricule">Matricule d'identification</Label>
                        <Input id="matricule" placeholder="ID-XXXXX" />
                      </div>
                      <div>
                        <Label htmlFor="name">Nom</Label>
                        <Input id="name" placeholder="Nom complet" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="password">Mot de passe</Label>
                        <Input id="password" type="password" placeholder="••••••••" />
                      </div>
                      <div>
                        <Label htmlFor="department">Service / Département</Label>
                        <Input id="department" placeholder="Cardiologie, Pédiatrie, etc." />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button 
                      onClick={handleNextStep}
                      className="bg-blue-500 hover:bg-blue-600"
                    >
                      Suivant
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="p-6">
                  <div className="mb-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500">
                          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                        </svg>
                      </div>
                      <div>
                        <h2 className="text-lg font-medium text-gray-800">Participation aux dons de sang</h2>
                      </div>
                    </div>
                    
                    <div className="flex items-center mb-4">
                      <input
                        type="checkbox"
                        id="participateInDonation"
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label htmlFor="participateInDonation" className="ml-2 block text-sm text-gray-700">
                        L'établissement participe aux collectes de sang
                      </label>
                    </div>
                    
                    <div className="mb-4">
                      <Label htmlFor="donationCapacity">Capacité journalière (donneurs)</Label>
                      <Input id="donationCapacity" type="number" placeholder="Nombre de donneurs par jour" />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
                          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                        </svg>
                      </div>
                      <div>
                        <h2 className="text-lg font-medium text-gray-800">Informations complémentaires</h2>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="certifyAuthorization"
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label htmlFor="certifyAuthorization" className="ml-2 block text-sm text-gray-700">
                          Je certifie que l'établissement dispose des autorisations nécessaires pour la collecte de sang
                        </label>
                      </div>
                      
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="accessibleToDisabled"
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label htmlFor="accessibleToDisabled" className="ml-2 block text-sm text-gray-700">
                          L'établissement est accessible aux personnes à mobilité réduite
                        </label>
                      </div>
                      
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="registerOnPlatform"
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label htmlFor="registerOnPlatform" className="ml-2 block text-sm text-gray-700">
                          Je suis autorisé à inscrire cet établissement sur la plateforme MyHealth
                        </label>
                      </div>
                      
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="acceptTerms"
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label htmlFor="acceptTerms" className="ml-2 block text-sm text-gray-700">
                          Je certifie que l'établissement accepte les documents nécessaires pour la collecte de sang
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between">
                    <Button 
                      variant="outline" 
                      onClick={() => setStep(1)}
                    >
                      Retour
                    </Button>
                    <Button 
                      onClick={handleNextStep}
                      className="bg-blue-500 hover:bg-blue-600"
                    >
                      Soumettre
                    </Button>
                  </div>
                </div>
              )}
            </Card>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}