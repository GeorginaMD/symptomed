# SymptoMed  — Drugs & Supplements Search App
> **MVP Version** — A web application for exploring drugs and supplements based on health symptoms and conditions. This project is actively being developed and expanded.

## Live Demo
- **Try the app here:** 
> The backend is hosted on Render's free tier. The first request after a period of inactivity may take **~30–60 seconds** to respond while the server wakes up. Subsequent requests will be fast.

##  About
Symptomed allows users to search for drugs and dietary supplements related to specific symptoms or health conditions. It combines data from the **OpenFDA API** for drug information with a curated **supplements database** seeded from a custom JSON file stored in MongoDB.
Users can create a personal account, store their health profile, and explore relevant health information in a secure environment.

## Features
- **Drug Search** — Powered by the [OpenFDA API](https://open.fda.gov/), search for drug information by symptom or condition
- **Supplements Explorer** — Browse a curated database of supplements supporting various health conditions
- **User Authentication** — Full register and login functionality secured with **JWT** and **HTTP-only cookies**
- **Protected Routes** — Authorization-based route protection for authenticated users
- **Demo Login** — Explore the app instantly with pre-defined demo credentials, no registration required
- **Personal Dashboard** — Logged-in users can store and manage their personal profile and health data


## Tech Stack
### Frontend
- React
- JavaScript
- CSS
- Vite (development server)
- 
### Backend
- Node.js
- Express
- Mongoose
- Express-Validator
- Bcrypt

### Database
- MongoDB Atlas

### External API
- [OpenFDA API](https://open.fda.gov/) — Drug data


## Getting Started
### Prerequisites
- Node.js installed
- MongoDB Atlas account and connection string

### Installation

1. **Clone the repository**
   git clone https://github.com/GeorginaMD/symptomed.git
   cd symptomed

2. **Install dependencies for both frontend and backend**
   # Backend
   cd /symptomed-api
   npm install

   # Frontend
   cd /symptomed
   npm install

3. **Set up environment variables**
   Create a `.env` file in the `/symptomed-api` directory:
   ```env
   MONGO_URI=your_mongodb_atlas_connection_string
   JWT_SECRET=your_jwt_secret
   PORT=3000
  

4. **Seed the supplements database**
   cd symptomed-api
   npm run seed

5. **Run the development servers**
   # Backend
   cd symptomed-api
   nodemon app.js

   # Frontend (in a new terminal)
   cd symptomed
   npm run dev

## Demo Access
You can explore the app without creating an account using the demo login option available on the login page.

## Roadmap
This is an MVP version. Planned features for future development include:
- Favorites / saved items list
- Adding supplements to personal dashboard


## Author
**Georgina Mircheska Damjanova**  
GitHub: https://github.com/GeorginaMD

## License
This project is open source and available under the [MIT License](LICENSE).
