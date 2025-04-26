"use client"

import DashboardLayout from '@/components/dashboard-layout';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, Plus } from 'lucide-react';

export default function Patients() {
  const patients = [
    { id: 1, name: 'Martin Dubois', bloodGroup: 'A+', doctor: 'Dr. Levy', service: 'Cardiologie' },
    { id: 2, name: 'Sophie Martin', bloodGroup: 'O-', doctor: 'Dr. Levy', service: 'Cardiologie' },
    { id: 3, name: 'Lucas Bernard', bloodGroup: 'B+', doctor: 'Dr. Levy', service: 'Cardiologie' },
    { id: 4, name: 'Marie Petit', bloodGroup: 'AB+', doctor: 'Dr. Levy', service: 'Cardiologie' },
  ];

  return (
    <DashboardLayout>
      <div className="p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Gestion des patients</h1>
          <Button className="bg-blue-500 hover:bg-blue-600">
            <Plus className="h-4 w-4 mr-2" />
            Nouveau patient
          </Button>
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
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Groupe sanguin</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Médecin référent</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Service</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {patients.map((patient) => (
                  <tr key={patient.id}>
                    <td className="px-4 py-3 text-sm text-gray-800">{patient.name}</td>
                    <td className="px-4 py-3 text-sm">
                      <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
                        {patient.bloodGroup}
                      </Badge>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-800">{patient.doctor}</td>
                    <td className="px-4 py-3 text-sm text-gray-800">{patient.service}</td>
                    <td className="px-4 py-3 text-sm">
                      <Button variant="ghost" size="sm">Voir le dossier</Button>
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