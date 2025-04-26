"use client"

import DashboardLayout from '@/components/dashboard-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, Filter } from 'lucide-react';

export default function Appointments() {
  const appointments = [
    { id: 1, patient: 'Martin Dubois', date: '2024-03-20 09:30', service: 'Cardiologie', medecin: 'Dr. Levy', status: 'Confirmé' },
    { id: 2, patient: 'Sophie Martin', date: '2024-03-20 10:15', service: 'Pédiatrie', medecin: 'Dr. Levy', status: 'En attente' },
    { id: 3, patient: 'Lucas Bernard', date: '2024-03-20 11:00', service: 'Cardiologie', medecin: 'Dr. Levy', status: 'Annulé' },
  ];

  return (
    <DashboardLayout>
      <div className="p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Gestion des rendez-vous</h1>
          <Button className="bg-blue-500 hover:bg-blue-600">Nouveau rendez-vous</Button>
        </div>

        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="flex gap-4 flex-wrap">
              <div className="flex-1 min-w-[200px]">
                <Input placeholder="Rechercher un patient..." className="w-full" />
              </div>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Filtres
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-0">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Patient</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Date et heure</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Service</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Médecin</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Statut</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {appointments.map((appointment) => (
                  <tr key={appointment.id}>
                    <td className="px-4 py-3 text-sm text-gray-800">{appointment.patient}</td>
                    <td className="px-4 py-3 text-sm text-gray-800">{appointment.date}</td>
                    <td className="px-4 py-3 text-sm text-gray-800">{appointment.service}</td>
                    <td className="px-4 py-3 text-sm text-gray-800">{appointment.medecin}</td>
                    <td className="px-4 py-3 text-sm">
                      <Badge className={
                        appointment.status === 'Confirmé' ? 'bg-green-100 text-green-800' :
                        appointment.status === 'En attente' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }>
                        {appointment.status}
                      </Badge>
                    </td>
                    <td className="px-4 py-3 text-sm">
                      <Button variant="ghost" size="sm">Modifier</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}