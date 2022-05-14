var firebaseConfig = {
    apiKey: "AIzaSyBVqeSEOcFyH9AHnrSsgIhj3VXkBXfxGJw",
    authDomain: "yuber-cab-91820.firebaseapp.com",
    databaseURL: "https://yuber-cab-91820-default-rtdb.firebaseio.com",
    projectId: "yuber-cab-91820",
    storageBucket: "yuber-cab-91820.appspot.com",
    messagingSenderId: "167435092192",
    appId: "1:167435092192:web:9fca0b185542d02401d085"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code



//End code
    } });  }); }
getData();

function send()
{

    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({

          name:user_name,
          message:msg,
          like:0


    });

    document.getElementById("msg").value = "";

}