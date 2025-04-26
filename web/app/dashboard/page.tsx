"use client"

import { useState } from 'react';
import DashboardLayout from '@/components/dashboard-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, PieChart, Pie, Cell, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';
import { Calendar, Clock, Users, Droplet } from 'lucide-react';

const lineData = [
  { name: 'Lun', value: 4 },
  { name: 'Mar', value: 3 },
  { name: 'Mer', value: 5 },
  { name: 'Jeu', value: 2 },
  { name: 'Ven', value: 4 },
  { name: 'Sam', value: 6 },
  { name: 'Dim', value: 3 },
];

const pieData = [
  { name: 'A+', value: 30, color: '#ef4444' },
  { name: 'B+', value: 25, color: '#3b82f6' },
  { name: 'O+', value: 20, color: '#22c55e' },
  { name: 'AB+', value: 15, color: '#eab308' },
  { name: 'A-', value: 10, color: '#ec4899' },
];

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Tableau de bord</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-blue-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Rendez-vous aujourd'hui</p>
                  <h3 className="text-2xl font-bold text-gray-800">12</h3>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <Droplet className="h-6 w-6 text-red-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Dons de sang aujourd'hui</p>
                  <h3 className="text-2xl font-bold text-gray-800">8</h3>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-green-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Total patients</p>
                  <h3 className="text-2xl font-bold text-gray-800">1,234</h3>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Clock className="h-6 w-6 text-yellow-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Temps moyen consultation</p>
                  <h3 className="text-2xl font-bold text-gray-800">25min</h3>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Rendez-vous - 7 derniers jours</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={lineData}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Distribution des groupes sanguins</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}