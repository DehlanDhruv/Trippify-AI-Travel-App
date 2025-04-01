# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# Trippify - AI-Powered Travel Planner

Trippify is an AI-powered travel planning app that helps users generate personalized trip itineraries based on their preferences. Enter your destination, trip duration, budget, and number of people, and get an AI-generated itinerary. Users can also view and manage their trip history.

## 🚀 Features
- AI-generated travel itineraries based on user input
- Google Authentication for secure login
- Google Places API integration for fetching places and photos
- User-friendly UI with Tailwind CSS
- View past trips and delete unwanted ones

## 🛠️ Tech Stack
- **Frontend:** React (Vite), Tailwind CSS
- **Authentication:** Google Auth
- **APIs:** Google Places API, Gemini AI API

## 📌 Installation & Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/trippify.git
   cd trippify
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Create a `.env` file and add your API keys:
   ```env
   VITE_GOOGLE_AUTH_CLIENT_ID=your_google_auth_client_id
   VITE_GOOGLE_PLACES_API_KEY=your_google_places_api_key
   VITE_GEMINI_AI_API_KEY=your_gemini_ai_api_key
   ```

4. Start the development server:
   ```sh
   npm run dev
   ```


## 📖 Usage
1. Sign in with Google.
2. Enter your destination, number of days, budget, and number of travelers.
3. Receive an AI-generated travel itinerary.
4. View and manage past trips from the trip history section.


