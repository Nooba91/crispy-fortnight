
 var firebaseConfig = {
  apiKey: "AIzaSyBNqoglvzUaio035JyvSGOICMFd3CDkdhU",
  authDomain: "kwitter-fb71c.firebaseapp.com",
  databaseURL: "https://kwitter-fb71c-default-rtdb.firebaseio.com",
  projectId: "kwitter-fb71c",
  storageBucket: "kwitter-fb71c.appspot.com",
  messagingSenderId: "456544322385",
  appId: "1:456544322385:web:6894af87fe8b675eca0970"
};

firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  
  firebase.database().ref("/").on('value', function(snapshot) { 
    document.getElementById("output").innerHTML = ""; 
    snapshot.forEach(function(childSnapshot) { 
      childKey  = childSnapshot.key;

       Room_names_firebase = childKey;
       console.log("Room Name - " + Room_names_firebase);
      row = "<div class='room_name' id="+Room_names_firebase+" onclick='redirectToRoomName(this.id)'>"+ Room_names_firebase +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
