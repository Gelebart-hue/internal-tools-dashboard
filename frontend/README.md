# Internal Management Dashboard for Tools

## Description
Ce tableau de bord interne permet aux administrateurs IT de surveiller les outils SaaS. Il se compose de trois pages : Dashboard, Tools, et Analytics. Le design system est construit sur Tailwind CSS, avec des icônes Lucide, et des typographies Inter.

## Installation et Lancement

1. Clonez le dépôt :
git clone https://github.com/Gelebart-hue/internal-tools-dashboard.git


2. Installez les dépendances :
npm install


3. Lancez le serveur de développement :
npm run dev


4. Accédez à l’application sur `http://localhost:5173`.

## Architecture du Projet

src/
├── components/ # Composants réutilisables (Header, KPICard, ToolsTable)
├── pages/ # Pages principales (Dashboard, Tools, Analytics)
├── hooks/ # Hooks personnalisés (useTools, useAnalytics)
├── services/ # API (Axios client)
├── types/ # Types TypeScript
├── styles/ # Config Tailwind et styles globaux
└── App.tsx # Point d'entrée de l'application


## Design System
- **Thème** : Dark moderne avec gradients (purple, blue, pink) ou version light.
- **Typographie** : Inter ou polices système.
- **Icones** : Lucide React ou Heroicons.
- **Grille** : Responsive via Tailwind (breakpoints mobile, tablette, desktop).

## Fonctionnalités par Page
- **Dashboard (Jour 6)** :
  - Header avec navigation
  - KPIs (budget, outils actifs, départements, coût par utilisateur)
  - Table des outils récents avec tri, pagination, et status.

- **Tools Page (Jour 7)** :
  - Catalogue complet des outils
  - Filtres avancés (département, statut, coût, catégorie)
  - Gestion des outils (CRUD, actions rapides)

- **Analytics Page (Jour 8)** :
  - Graphiques de coûts, adoption, et tendances
  - Insights business (optimisation, ROI)

## Responsive Design
- Mobile (< 640px) : Layout simplifié, menu hamburger, cartes en colonne unique.
- Tablet (640-1024px) : Layout mixte, sidebar, grilles 2 colonnes.
- Desktop (> 1024px) : Layout complet, multi-colonnes, interactions avancées.

## Stratégie d'Intégration des Données
- Utilisation du JSON Server pour les données (endpoints : /tools, /departments, /users, /analytics).
- Fetch des données via Axios (hooks `useTools`, `useAnalytics`).

## Tests et Qualité du Code
- Tests unitaires : Composants clés (KPI, ToolsTable, StatusBadge).
- ESLint et TypeScript pour la qualité du code.

## Évolution du Design
- Jour 6 : Fondation exacte du style.
- Jour 7 : Cohérence absolue sans nouveaux styles.
- Jour 8 : Intégration des visualisations et interactions avancées.

## Prochaines Étapes
- Ajout des exports de rapports (PDF, Excel).
- Amélioration des insights prédictifs (projections de coûts).
- Mise à jour en temps réel des données.

## Critères de succès
- Cohérence visuelle entre les pages.
- Navigation fluide entre Dashboard, Tools, et Analytics.
- Responsive parfait sur tous les appareils.
- Qualité du code : Architecture claire, composants réutilisables.
- Intégration intelligente des données JSON.

## Licence
Ce projet est sous licence ISC.


