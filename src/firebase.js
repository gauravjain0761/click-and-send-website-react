import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging, getToken } from "firebase/messaging"

const firebaseConfig = {
  apiKey: "AIzaSyBgF306E9anZw5nLFpBQmegGJ1AyVNs5FI",
  authDomain: "mohit-a7732.firebaseapp.com",
  projectId: "mohit-a7732",
  storageBucket: "mohit-a7732.appspot.com",
  messagingSenderId: "311888618581",
  appId: "1:311888618581:web:f7ca764abc65727caa20dc",
  measurementId: "G-3GKF1W9Q57"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const messaging = getMessaging(app);

export const getNotifyToken = async () => {
  const token = await getToken(messaging, {
    vapidKey: "BINZotivG8gkOIZb7p9wEMcDLfJ7ajnPGuo7D6pd_CDB5s1YaLamGhqc5PVwUv1UrrMs2hmgk1HaKhiQlzzjld8"
  })

  return token
}