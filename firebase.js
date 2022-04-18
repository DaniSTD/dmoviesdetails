var firebaseConfig = {
    apiKey: "AIzaSyAsRM7XwHEFEtTEu9dEywZfDIYmz6Dc8og",
    authDomain: "todo-3c1cb.firebaseapp.com",
    projectId: "todo-3c1cb",
    storageBucket: "todo-3c1cb.appspot.com",
    messagingSenderId: "878902164029",
    appId: "1:878902164029:web:a71dd2f51888988222c854",
    measurementId: "G-KPETG7ZEEW"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  var db = firebase.firestore();