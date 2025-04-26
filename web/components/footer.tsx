import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white py-8 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-blue-500 flex items-center justify-center rounded-full text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                </svg>
              </div>
              <span className="text-blue-500 font-medium text-xl">MyHealth</span>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              La solution complète pour simplifier la gestion des patients et des soins de santé dans les établissements hospitaliers.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-800 mb-4">Nos services</h3>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-sm text-gray-600 hover:text-blue-500">Gestion des patients</Link></li>
              <li><Link href="/services" className="text-sm text-gray-600 hover:text-blue-500">Rendez-vous</Link></li>
              <li><Link href="/don-de-sang" className="text-sm text-gray-600 hover:text-blue-500">Don de sang</Link></li>
              <li><Link href="/statistiques" className="text-sm text-gray-600 hover:text-blue-500">Statistiques</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-800 mb-4">Contact</h3>
            <p className="text-sm text-gray-600 mb-2">myhealth@gmail.com</p>
            <p className="text-sm text-gray-600">+228 xx xx xx xx</p>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} MyHealth. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}