importScripts("https://www.gstatic.com/firebasejs/9.8.4/firebase-app-compat.js")
importScripts("https://www.gstatic.com/firebasejs/9.8.4/firebase-messaging-compat.js")



const firebaseConfig = {
    apiKey: "AIzaSyBgF306E9anZw5nLFpBQmegGJ1AyVNs5FI",
    authDomain: "mohit-a7732.firebaseapp.com",
    projectId: "mohit-a7732",
    storageBucket: "mohit-a7732.appspot.com",
    messagingSenderId: "311888618581",
    appId: "1:311888618581:web:f7ca764abc65727caa20dc",
    measurementId: "G-3GKF1W9Q57"
};

const app = firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging(app);


messaging.onBackgroundMessage(payload => {
    console.log("------------public---call--------------");
    // previo a mostrar notificación
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: "/logo192.png"
    }


    return self.registration.showNotification(
        notificationTitle,
        notificationOptions
    )
})