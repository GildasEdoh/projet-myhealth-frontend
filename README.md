# projet-myhealth
Projet Miabe Hackathon 2025 app mobile

# Monorepo Médical - Plateforme Santé Complète

![Banner](https://via.placeholder.com/1200x400?text=Medical+Platform+-+Mobile+%2B+Web+%2B+API)

## 📦 Structure Monorepo (Turborepo) frontend
medical-monorepo/
├── apps/
│ ├── mobile/ # Application Expo (React Native)
│ ├── web/ # Frontend Next.js
├── packages/
│ ├── ui/ # Composants partagés (React/React Native)
│ ├── types/ # Types TypeScript communs

│ └── config/ # Configurations ESLint/Prettier
├── .github/ # Workflows GitHub Actions
├── turbo.json # Configuration Turborepo
└── README.md # Ce fichier


## 🚀 Démarrage Rapide

### Prérequis
- Node.js 18+
- npm 8+ (recommandé)

```bash
# 1. Cloner le dépôt
git clone https://github.com/votre-org/medical-monorepo.git
cd medical-monorepo

# 2. Installer les dépendances
npm install

# 3. Copier les variables d'environnement
cp apps/mobile/.env.example apps/mobile/.env
cp apps/web/.env.example apps/web/.env
cp apps/api/.env.example apps/api/.env

# 4. Démarrer en mode développement
npm dev

🔧 Commandes Utiles
Commande	Description
npm build	Build tous les projets
npm test	Exécute tous les tests
npm dev:mobile	Lance Expo Dev Client
npm dev:web	Lance Next.js (localhost:3000)
npm dev:api	Lance l'API NestJS (localhost:4000)
npm lint	Vérifie la qualité du code
npm format	Formate tout le code
🌐 Environnements
Environnement	URL
Dev Mobile	exp://localhost:19000
Dev Web	http://localhost:3000
Dev API	http://localhost:4000/api
Prod API	https://api.medical-app.com
Storybook	http://localhost:6006
📚 Documentation Technique
Architecture Mobile

API Endpoints

Guide de Style

Conventions de Code

🛠 Outillage
Monorepo : Turborepo

Mobile : Expo + React Native

Web : Next.js 14 (App Router)

API : NestJS + Prisma + PostgreSQL

UI : React Native Web + Tamagui

CI/CD : GitHub Actions

Monitoring : Sentry + Datadog

🤝 Contribution
Créer une branche : git checkout -b feat/ma-nouvelle-fonctionnalite

Commiter les changements : git commit -m "feat(scope): description"

Pousser la branche : git push origin feat/ma-nouvelle-fonctionnalite

Ouvrir une Pull Request

📄 License
MIT © 2024 Votre Organisation


### Téléchargement
Pour télécharger ce fichier README.md :

1. **Option 1** : Copiez le contenu ci-dessus et collez-le dans un nouveau fichier `README.md`
2. **Option 2** : [Téléchargez le fichier README.md prêt à l'emploi](https://gist.githubusercontent.com/your-username/your-gist-id/raw/README.md) (remplacez l'URL par votre propre gist)

### Fonctionnalités clés incluses :
- Structure monorepo claire
- Commandes Turborepo pratiques
- Documentation technique liée
- Guide de contribution
- Compatible mobile/web
- Prêt pour CI/CD

Personnalisez les URLs, ports et noms de projets selon vos besoins réels.
