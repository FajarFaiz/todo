const firebaseConfig = {
    apiKey: "AIzaSyAfJilgWL6tlxnZ8WWTlEc7lqRjbMa1R4E",
    authDomain: "to-do--live.firebaseapp.com",
    projectId: "to-do--live",
    storageBucket: "to-do--live.appspot.com",
    messagingSenderId: "211812785033",
    appId: "1:211812785033:web:ae9ffe0deb2c957c081f58",
    measurementId: "G-TNW7TQH753"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getFirestore(app);

