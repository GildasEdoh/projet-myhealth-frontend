# Medical Appointment Management App

A comprehensive medical appointment management application built with React Native and Expo. This application helps users manage their medical appointments, track medications, monitor blood donations, and maintain their healthcare records.

## Features

- 📅 **Appointment Management**
  - Schedule and track medical appointments
  - Filter upcoming and past appointments
  - Reschedule or cancel appointments
  - View appointment details including location and doctor information

- 💊 **Medication Tracking**
  - Monitor daily medication schedules
  - Track dosage and timing
  - Mark medications as taken
  - Set medication reminders

- 🩸 **Blood Donation Tracking**
  - Monitor blood donation history
  - Track eligibility for next donation
  - View blood type information
  - Count total donations made

- 👨‍⚕️ **Specialist Directory**
  - Browse different medical specialists
  - Quick access to common specialties
  - View recent visits history
  - Schedule new appointments

- ⚙️ **User Settings**
  - Manage personal information
  - Configure notifications
  - Privacy and security settings
  - Account management

## Technology Stack

- React Native
- Expo Router for navigation
- TypeScript for type safety
- Lucide Icons for UI elements
- Expo's managed workflow

## Getting Started

### Prerequisites

- Node.js (v18 or newer)
- npm or yarn
- Expo CLI

### Installation

1. Clone the repository:
```bash
git clone 
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

## Project Structure

```
app/
├── (tabs)/                   # Tab-based navigation
│   ├── _layout.tsx          # Tab navigation configuration
│   ├── index.tsx            # Home screen
│   ├── appointments.tsx     # Appointments management
│   ├── medications.tsx      # Medication tracking
│   ├── bloodDonation.tsx    # Blood donation tracking
│   └── settings.tsx         # User settings
├── components/
│   ├── medical/             # Medical-related components
│   │   ├── AppointmentCard.tsx
│   │   ├── MedicationCard.tsx
│   │   └── VisitCard.tsx
│   └── ui/                  # Shared UI components
│       ├── Header.tsx
│       ├── SearchBar.tsx
│       └── Separator.tsx
└── constants/
    ├── Colors.ts            # Color definitions
    └── medical.ts           # Medical data types and constants
```

## Key Features Implementation

### Appointment Management

- Filter appointments by upcoming and past dates
- Detailed appointment cards with status indicators
- Action buttons for appointment management
- Location and timing information display

### Medication Tracking

- Visual medication cards with dosage information
- Schedule tracking with time indicators
- Medication status management
- Quick actions for marking medications as taken

### Blood Donation Module

- Next donation eligibility tracking
- Blood type information display
- Donation history counter
- Visual statistics presentation

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Medical icons and images from Pexels
- UI design inspiration from modern healthcare applications
- Lucide for the beautiful icon set