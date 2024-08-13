// import { defineNuxtPlugin } from '#app';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

export default defineNuxtPlugin(nuxtApp => {
  const firebaseConfig = {
    apiKey: "AIzaSyCb54XEaXe81S4-ADSU5afW6SoGGRZOBXA",
    authDomain: "book-exchange-app-fyp.firebaseapp.com",
    projectId: "book-exchange-app-fyp",
    storageBucket: "book-exchange-app-fyp.appspot.com",
    messagingSenderId: "199597924928",
    appId: "1:199597924928:web:bb498899dad8be2efe35a5",
    measurementId: "G-RGSRP9YMKK"
  };
  

  const app = initializeApp(firebaseConfig);
  const firestore = getFirestore(app);

  nuxtApp.provide('firestore', firestore);
});