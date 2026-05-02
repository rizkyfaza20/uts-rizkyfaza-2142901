// Firebase Configuration TEMPLATE
// ===========================================
// ⚠️  IMPORTANT: DO NOT COMMIT THE ACTUAL firebase.js FILE!
// This template shows the structure only.
// ===========================================
// 
// Steps to setup:
// 1. Copy this file to firebase.js
// 2. Fill in your actual Firebase credentials from Firebase Console
// 3. Get your Weather API key from OpenWeatherMap
//
// ===========================================

export const firebaseConfig = {
  apiKey: "YOUR_API_KEY_HERE",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Weather API Configuration
// Using OpenWeatherMap API (Free tier available)
// Register at: https://openweathermap.org/api
export const weatherAPIConfig = {
  apiKey: "YOUR_OPENWEATHER_API_KEY",
  baseURL: "https://api.openweathermap.org/data/2.5"
};

// ===========================================
// 📝 SETUP CHECKLIST:
// [ ] Create Firebase project at https://console.firebase.google.com/
// [ ] Enable Email/Password Authentication
// [ ] Create Firestore Database
// [ ] Copy Firebase config from Project Settings
// [ ] Register at https://openweathermap.org/
// [ ] Get free API key
// [ ] Paste both configs above
// [ ] Save as firebase.js (this file will be auto-ignored by git)
// ===========================================