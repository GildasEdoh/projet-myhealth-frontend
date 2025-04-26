import Header from '@/components/header';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, MapPin, Phone, Clock, MessageSquare } from 'lucide-react';

export default function Contacts() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header activeLink="contacts" />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Contactez-nous</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Notre équipe est à votre disposition pour répondre à toutes vos questions sur nos services et vous aider à optimiser votre pratique médicale.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <Card className="border">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="font-medium text-gray-800 mb-2">Email</h3>
                <p className="text-sm text-gray-600">myhealth@gmail.com</p>
              </CardContent>
            </Card>
            
            <Card className="border">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="font-medium text-gray-800 mb-2">Téléphone</h3>
                <p className="text-sm text-gray-600">+228 xx xx xx xx</p>
              </CardContent>
            </Card>
            
            <Card className="border">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="font-medium text-gray-800 mb-2">Horaires</h3>
                <p className="text-sm text-gray-600">Lun-Ven: 8h00 - 18h00</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="border">
              <CardHeader>
                <CardTitle className="text-xl font-medium text-center">Envoyez-nous un message</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <Label htmlFor="name">Nom</Label>
                      <Input id="name" placeholder="Votre nom complet" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="votre@email.com" />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <Label htmlFor="subject">Sujet</Label>
                    <Input id="subject" placeholder="Objet de votre message" />
                  </div>
                  
                  <div className="mb-6">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Votre message" rows={5} />
                  </div>
                  
                  <div className="text-center">
                    <Button className="bg-blue-500 hover:bg-blue-600">
                      Envoyer le message
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Foire aux questions</h2>
              <p className="text-gray-600">
                Réponses aux questions les plus fréquemment posées sur MyHealth
              </p>
            </div>
            
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="h-4 w-4 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800 mb-2">
                        Comment puis-je intégrer MyHealth à mon établissement ?
                      </h3>
                      <p className="text-sm text-gray-600">
                        L'intégration de MyHealth est simple et rapide. Notre équipe technique vous accompagne tout au long du processus, depuis la configuration initiale jusqu'à la formation de votre personnel. Contactez-nous pour planifier une démonstration personnalisée.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="h-4 w-4 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800 mb-2">
                        Quelle est la tarification de MyHealth ?
                      </h3>
                      <p className="text-sm text-gray-600">
                        Nous proposons plusieurs formules adaptées aux besoins spécifiques de votre établissement, qu'il s'agisse d'une petite clinique ou d'un grand hôpital. Contactez notre service commercial pour obtenir un devis personnalisé.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="h-4 w-4 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800 mb-2">
                        Comment garantissez-vous la sécurité des données ?
                      </h3>
                      <p className="text-sm text-gray-600">
                        La sécurité est notre priorité absolue. MyHealth utilise un chiffrement de bout en bout, respecte toutes les réglementations en matière de protection des données de santé, et effectue des audits de sécurité réguliers. Toutes les données sont stockées sur des serveurs sécurisés avec des sauvegardes automatiques.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}