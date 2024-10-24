// Ma variable d'accés à Firebase La variable de config pour firebase
const firebaseConfig = {
    apiKey: "AIzaSyDWmv1npj0V4hKp2vSWUTW-PC42CmplAJ8",
    authDomain: "bdd-js-34.firebaseapp.com",
    databaseURL: "https://bdd-js-34-default-rtdb.firebaseio.com",
    projectId: "bdd-js-34",
    storageBucket: "bdd-js-34.appspot.com",
    messagingSenderId: "386281932456",
    appId: "1:386281932456:web:1a047308d12489a32f249d",
    measurementId: "G-Y6TFX1H002"
  };

   firebase.initializeApp(firebaseConfig);
   //On va créer une référence à notre BDD
   const dbRef = firebase.database().ref();
   // On va également faire une ref directement dans le noeud / """"table""""" users
   const usersRef = dbRef.child("users");
   const addUserBtnUI = document.getElementById("add-user-btn");
   addUserBtnUI.addEventListener("click", addUserBtnClicked);
   const formUserUI = document.getElementById("add-user-form");
   formUserUI.addEventListener("submit", (event) => event.preventDefault());
   const formUserEditUI = document.getElementById("edit-user-module");
   formUserEditUI.addEventListener("submit", (event) => event.preventDefault());
   const userListUI = document.getElementById("user-list");
   const userDetailUI = document.getElementById("user-detail");
   readUserData();
   function addUserBtnClicked() {
   };
   function readUserData() {
   };
   function userClicked(event) {
   };
   function editButtonClicked(event) {
   };
   function saveUserBtnClicked() {
   };
   function deleteButtonClicked(event) {
   