export interface Specialist {
  id: number;
  name: string;
  imageUrl: string;
}

export interface Visit {
  id: number;
  doctorName: string;
  specialty: string;
}
export type DoctorType = {
  id: number;
  name: string;
  specialty: string;
  description: string;
  availability: string;
};

export interface Appointment {
  id: number;
  doctorName: string;
  specialty: string;
  date: string;
  time: string;
  location: string;
  status: 'upcoming' | 'completed' | 'cancelled';
}

export interface Medication {
  id: number;
  name: string;
  dosage: string;
  schedule: string;
  time?: string[];
  reminder: boolean;
}

export const specialists: Specialist[] = [
  {
    id: 1,
    name: 'Neurologue',
    imageUrl: 'https://img-3.journaldesfemmes.fr/2k6U4vk-o4b1tLEFx9y0egJCUw0=/1500x/smart/1186a8321de9480eb7d4b32f776ada84/ccmcms-jdf/39631837.jpg',
  },
  {
    id: 2,
    name: 'Cardiologue',
    imageUrl: 'https://images.pexels.com/photos/8376232/pexels-photo-8376232.jpeg',
  },
  {
    id: 3,
    name: 'Orthopediste',
    imageUrl: 'https://www.deuxiemeavis.fr/_next/image?url=https%3A%2F%2Fmedia.carians.fr%2Fdeuxiemeavis%2Fblog%2Fqu-est-ce-qu-un-medecin-orthopediste.png&w=3840&q=75',
  },
  {
    id: 4,
    name: 'Gynécologue',
    imageUrl: 'https://images.pexels.com/photos/8376305/pexels-photo-8376305.jpeg',
  },
  {
    id: 5,
    name: 'Dentiste',
    imageUrl: 'https://images.pexels.com/photos/8376148/pexels-photo-8376148.jpeg',
  },
  {
    id: 6,
    name: 'Ophtalmologues',
    imageUrl: 'https://previews.123rf.com/images/topvectors/topvectors1706/topvectors170600497/80273726-oculiste-ou-ophtalmologue-ophtalmologue-m%C3%A9decin-indiquant-le-texte-de-l-examen-illustration-vectorie.jpg',
  },
];

export const recentVisits: Visit[] = [
  {
    id: 1,
    doctorName: 'Dr rosa',
    specialty: 'Ophtalmologue',
  },
  {
    id: 2,
    doctorName: 'Dr rosa',
    specialty: 'Ophtalmologue',
  },
];

export const appointments: Appointment[] = [
  {
    id: 1,
    doctorName: 'Dr. Mario',
    specialty: 'Orthopdesite Consultation',
    date: '2024-09-07T10:30:00',
    time: '10:30',
    location: 'Clinique Médicale Centre',
    status: 'upcoming',
  },
  {
    id: 2,
    doctorName: 'Dr. Sophie',
    specialty: 'Cardiologue',
    date: '2024-09-15T14:00:00',
    time: '14:00',
    location: 'Hôpital Saint-Joseph',
    status: 'upcoming',
  },
  {
    id: 3,
    doctorName: 'Dr. Rosa',
    specialty: 'Ophtalmologue',
    date: '2024-08-25T11:15:00',
    time: '11:15',
    location: 'Centre Médical Vision',
    status: 'completed',
  },
  {
    id: 4,
    doctorName: 'Dr. Thomas',
    specialty: 'Dentiste',
    date: '2024-08-10T09:00:00',
    time: '09:00',
    location: 'Cabinet Dentaire Sourire',
    status: 'completed',
  },
  {
    id: 5,
    doctorName: 'Dr. Umar',
    specialty: 'Gyneco',
    date: '2025-08-10T09:8:00',
    time: '09:00',
    location: 'Cabinet Dentaire Sourire',
    status: 'completed',
  },
];

export const medications: Medication[] = [
  {
    id: 1,
    name: 'Amoxicilline',
    dosage: '500mg - 1 comprimé',
    schedule: 'Chaque matin, midi et soir',
    time: ['08:00', '12:00', '20:00'],
    reminder: true,
  },
  {
    id: 2,
    name: 'Ibuprofène',
    dosage: '400mg - 1 comprimé',
    schedule: 'Toutes les 6 heures si nécessaire',
    reminder: false,
  },
  {
    id: 3,
    name: 'Vitamine D',
    dosage: '1000 UI - 1 gélule',
    schedule: 'Une fois par jour au petit déjeuner',
    time: ['08:00'],
    reminder: true,
  },
];


export const doctors: DoctorType[] = [
  {
    id: 1,
    name: 'Dr. Junior Idris',
    specialty: 'Cardiologue',
    description: 'Bref descriptive de la spécialité et expérience',
    availability: 'Prochaine disponibilité',
  },
  {
    id: 2,
    name: 'Dr. Vincent',
    specialty: 'Spécialité',
    description: 'Bref descriptive de la spécialité et expérience',
    availability: 'Prochaine disponibilité',
  },
  {
    id: 3,
    name: 'Dr. Junior',
    specialty: 'Spécialité',
    description: 'Bref descriptive de la spécialité et expérience',
    availability: 'Prochaine disponibilité',
  },
];
export const hospitals = [
  { id: 1, name: 'CHU Tokoin' },
  { id: 2, name: 'Clinique Saint Louis' },
  { id: 3, name: 'Centre Médical' },
];

export const specialties = [
  { id: 1, name: 'Cardiologue' },
  { id: 2, name: 'Dermatologie' },
  { id: 3, name: 'Ophtalmologie' },
  { id: 4, name: 'Pédiatrie' },
  { id: 5, name: 'Gynécologie' },
];