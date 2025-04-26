import { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { 
  LayoutDashboard, 
  Calendar, 
  Users, 
  Droplet,
  Settings,
  LogOut
} from 'lucide-react';

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathname = usePathname();

  const navigation = [
    { name: 'Tableau de bord', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Rendez-vous', href: '/dashboard/rendez-vous', icon: Calendar },
    { name: 'Patients', href: '/dashboard/patients', icon: Users },
    { name: 'Don de sang', href: '/dashboard/don-de-sang', icon: Droplet },
    { name: 'Paramètres', href: '/dashboard/parametres', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex h-screen bg-gray-50">
        <div className="w-64 bg-white border-r">
          <div className="h-16 flex items-center gap-2 px-4 border-b">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
            </div>
            <span className="text-blue-500 font-medium">MyHealth</span>
          </div>

          <nav className="p-4 space-y-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md",
                    isActive
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-600 hover:bg-gray-50"
                  )}
                >
                  <item.icon className={cn(
                    "h-5 w-5",
                    isActive ? "text-blue-600" : "text-gray-400"
                  )} />
                  {item.name}
                </Link>
              );
            })}
          </nav>

          <div className="absolute bottom-0 w-64 p-4 border-t">
            <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900">
              <LogOut className="h-5 w-5" />
              Déconnexion
            </button>
          </div>
        </div>

        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}