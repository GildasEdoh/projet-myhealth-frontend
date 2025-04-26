import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

interface HeaderProps {
  activeLink?: string;
}

export default function Header({ activeLink }: HeaderProps) {
  const links = [
    { href: '/', label: 'Accueil', id: 'accueil' },
    { href: '/services', label: 'Nos services', id: 'services' },
    { href: '/don-de-sang', label: 'Don de sang', id: 'don-de-sang' },
    { href: '/utilisateurs', label: 'Avis des utilisateurs', id: 'utilisateurs' },
    { href: '/contacts', label: 'Contacts', id: 'contacts' },
  ];

  return (
    <header className="border-b py-3 bg-white">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-500 flex items-center justify-center rounded-full text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
            </svg>
          </div>
          <span className="text-blue-500 font-medium text-xl">MyHealth</span>
        </div>
        
        <nav className="flex-1 ml-10">
          <ul className="flex gap-6 justify-center">
            {links.map((link) => (
              <li key={link.id}>
                <Link 
                  href={link.href}
                  className={`text-sm hover:text-blue-500 ${activeLink === link.id ? 'text-blue-500 font-medium' : 'text-gray-600'}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        <Button size="sm" className="bg-blue-500 hover:bg-blue-600">
          Connexion
        </Button>
      </div>
    </header>
  );
}