// Your web app's Firebase configuration

var firebaseConfig = {
  apiKey: "AIzaSyDrlkLZDUz1OljEeNKQbnzK2DhErpH-57o",
  authDomain: "kwitterchat-4611f.firebaseapp.com",
  databaseURL: "https://kwitterchat-4611f-default-rtdb.firebaseio.com",
  projectId: "kwitterchat-4611f",
  storageBucket: "kwitterchat-4611f.appspot.com",
  messagingSenderId: "256501583469",
  appId: "1:256501583469:web:c381fa4c1079b344bc7964",
  measurementId: "G-WG5ZNTX798"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);



  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

// Add the room name to database
function addRoom()
{
  room_name = document.getElementById("room_name").value;
  // Add the room name in database
  firebase.database().ref("/").child(room_name).update({ purpose:"adding user name" });
  // Set the local storage with this room name
    localStorage.setItem("room_name", room_name);
  // Open the page to start chat message
    window.location = "kwitter_page.html";
}

// Get the room names from databse and display on this kwitter room page
function getData() 
{  // get the room names in the childSnapshot.Key 
  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; 
  snapshot.forEach(function(childSnapshot) 
  { childKey  = childSnapshot.key;
       
    Room_names = childKey;

       // Start Code
       console.log("Room Name - " + Room_names);
       // Display room names in separate Rows

        // <div class = "room_name" id= "Friends"  onclick = redirectToRoomName("Friends")> #Friends </div> <hr> 
        ``
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      

      document.getElementById("output").innerHTML += row;
    });
      // End Code
  });

}

getData();

// Open the chatMessage page to start chatting within the room name selected.
function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

// Logout the User & clear local storage
function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}
