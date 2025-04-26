import Header from '@/components/header';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import TestimonialCard from '@/components/testimonial-card';

export default function UserReviews() {
  const testimonials = [
    {
      name: "Dr. Sophie Martin",
      role: "Cardiologue, Hôpital Central",
      quote: "MyHealth a complètement transformé ma pratique médicale. La gestion des rendez-vous est devenue tellement plus simple, et l'accès aux dossiers patients est rapide et sécurisé.",
      rating: 5,
      image: "https://images.pexels.com/photos/5214949/pexels-photo-5214949.jpeg"
    },
    {
      name: "Dr. Thomas Dubois",
      role: "Directeur, Clinique Saint-Joseph",
      quote: "Grâce à MyHealth, notre clinique a amélioré son efficacité de 40%. Les patients sont plus satisfaits et notre personnel médical peut se concentrer sur ce qui compte vraiment : les soins.",
      rating: 5,
      image: "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg"
    },
    {
      name: "Marie Leclerc",
      role: "Responsable Don de Sang, Centre Hospitalier Régional",
      quote: "La fonctionnalité de gestion des dons de sang est exceptionnelle. Nous avons augmenté nos collectes de 25% depuis que nous utilisons MyHealth pour coordonner nos campagnes.",
      rating: 4,
      image: "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg"
    },
    {
      name: "Dr. Alexandre Petit",
      role: "Pédiatre, Cabinet Médical des Enfants",
      quote: "Interface intuitive, support réactif et fonctionnalités complètes. MyHealth répond parfaitement aux besoins spécifiques de notre cabinet pédiatrique.",
      rating: 5,
      image: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg"
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <Header activeLink="utilisateurs" />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Ce que disent nos utilisateurs</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez les témoignages de professionnels de santé et d'établissements hospitaliers qui utilisent quotidiennement MyHealth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Rejoignez notre communauté</h2>
              <p className="text-gray-600 mb-8">
                Plus de 500 établissements et 2000 professionnels de santé font déjà confiance à MyHealth. Soyez le prochain à améliorer votre pratique médicale grâce à notre plateforme.
              </p>
              <div className="flex justify-center gap-4">
                <Button className="bg-blue-500 hover:bg-blue-600">
                  Commencer maintenant
                </Button>
                <Button variant="outline">
                  Demander une démo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}