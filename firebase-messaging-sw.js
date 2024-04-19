// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp( {
  apiKey: "AIzaSyDQ2JHmrtLZeyUEFnlz_SCGILt45s7Eh1U",
  authDomain: "cmask-62fef.firebaseapp.com",
  projectId: "cmask-62fef",
  storageBucket: "cmask-62fef.appspot.com",
  messagingSenderId: "912305395484",
  appId: "1:912305395484:web:cc5ff70051a737b7078cd9",
  measurementId: "G-MYM6ERC296"
  });



messaging.onBackgroundMessage((payload) => {
    console.log(
      '[firebase-messaging-sw.js] Reertyceived background message ',
      payload
    );
    // Customize notification here
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: payload.notification.body,
      icon: payload.notification.image
    };
  
    self.registration.showNotification(notificationTitle, notificationOptions);
  });

const messaging = firebase.messaging();