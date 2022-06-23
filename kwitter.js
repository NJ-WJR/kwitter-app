var firebaseConfig = {
  apiKey: "AIzaSyDA71DmKjHmJMpzO9_EIl9BPc2Vu-fV5jw",
  authDomain: "kwitter-449aa.firebaseapp.com",
  databaseURL: "https://kwitter-449aa-default-rtdb.firebaseio.com",
  projectId: "kwitter-449aa",
  storageBucket: "kwitter-449aa.appspot.com",
  messagingSenderId: "630144910622",
  appId: "1:630144910622:web:f506cd2898c7bd3439350f",
  measurementId: "G-79TLV5HFLL"
};

firebase.initializeApp(firebaseConfig);

  

function addUser() {
    user_name = document.getElementById("user_name").value
    localStorage.setItem("user_name" , user_name);
    window.location = "kwitter_room.html"
}