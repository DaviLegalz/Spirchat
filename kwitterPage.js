const firebaseConfig = {
      apiKey: "AIzaSyAdX2REIU_c3rNeDIkNWDtA8wOsjTeAvD0",
      authDomain: "fnafconversation.firebaseapp.com",
      projectId: "fnafconversation",
      storageBucket: "fnafconversation.appspot.com",
      messagingSenderId: "115882023957",
      appId: "1:115882023957:web:8add129a7f60aa1223c21c"
    };
    
    const app = initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+roomName).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebaseMessageId = childKey;
         messageData = childData;
//Início do código

//Fim do código
      } });  }); }
getData();
