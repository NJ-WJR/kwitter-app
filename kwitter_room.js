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

    
user_name = localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!"

function addRoom() {
      room_name = document.getElementById("room_name").value
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding user"
      });
      localStorage.setItem("room_name", room_name)
      window.location = "kwitter_page.html"
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  console.log("Room Name - " + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
            });
      });
}
getData();

function logOut() {
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
      window.location = "index.html"
}

function redirectToRoomName(name) {
      console.log(name)
      localStorage.setItem("room_name", name)
      window.location = "kwitter_page.html"
}