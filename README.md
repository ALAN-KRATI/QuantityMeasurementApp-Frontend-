# Quantity Measurement App Frontend

Frontend for the Quantity Measurement App built using React + Vite.

## Tech Stack
- React
- Vite
- React Router DOM
- Axios
- Docker

## Setup

git clone <frontend-repo-url>
cd quantity-measurement-frontend
npm install

# QMA Frontend Documentation

### ⚙️ Configuration
Create a `.env` file in the root directory:
VITE_API_BASE_URL=http://localhost:8080

npm run dev

Local URL: http://localhost:5173

✨ Features
- Authentication: Login / Register & Google OAuth
- Conversion: Real-time Quantity Conversion
- Tracking: Conversion History

🔌 API Endpoints Used

## API Endpoints

| Method |        Endpoint          | Function |
|--------|-----------|--------------|
| POST   | `/api/auth/login`        | User Authentication |
| POST   | `/api/auth/register`     | User Registration |
| POST   | `/api/quantity/convert`  | Execute Conversion |
| GET    | `/api/quantity/history`  | Fetch History |
