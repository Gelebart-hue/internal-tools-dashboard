# Internal Tools Dashboard

## Stack

Backend
- NestJS
- Prisma
- PostgreSQL

Frontend
- React
- TypeScript
- Vite
- TailwindCSS

---

## Installation

### Backend

cd backend
npm install
npx prisma migrate dev
npm run start:dev

### Frontend

cd frontend
npm install
npm run dev

---

## API

GET /departments       # List of 5 departments
GET /users             # List of 66 users  
GET /tools             # List of 24 SaaS tools
GET /user_tools        # User-tools relationships
GET /analytics         # KPIs, budget and dashboard metrics