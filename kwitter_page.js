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

room_name = localStorage.getItem("room_name")
user_name = localStorage.getItem("user_name")


function logOut() {
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
      window.location = "index.html"
}

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code
                        console.log(firebase_message_id);
                        console.log(message_data)
                        name = message_data['name'];
                        message = message_data['message'];
                        like = message_data['like'];
                        nwt = "<h4> " + name + "<img class='user_tick' src='tick.png'></h4>";
                        mwt = "<h4 class='message_h4'>" + message + "</h4>"
                        like_btn = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + like + " onclick='updateLike(this.id)'>"
                        swt = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + like + " </span> </button> <hr>"

                        row = nwt + mwt + like_btn + swt;
                        document.getElementById("output").innerHTML += row;
                        //End code
                  }
            });
      });
}
getData();

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });
      document.getElementById("msg").value = "";
}