 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
 import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";
 import { doc, getFirestore, setDoc } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-firestore.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyB4tBoYsvOcZfgrKvHS2bR85IFocm1_xzQ",
   authDomain: "name-d38be.firebaseapp.com",
   projectId: "name-d38be",
   storageBucket: "name-d38be.appspot.com",
   messagingSenderId: "936938178319",
   appId: "1:936938178319:web:39988c25f95888fb8ce07a",
   measurementId: "G-J5BDD2GM0J"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);

 const email = document.getElementById("email")
 const password = document.getElementById("password") 

 const data = {
    email: email.value,
    phone: phone.value,
    address: address.value,
    id: id.value,
};

 const auth = getAuth();
 const db = getFirestore(app);
 const signIn = document.getElementById("submit")

 signIn.addEventListener("click", (e) => {
    e.preventDefault();
    const emailValue = email.value;
    const passwordValue = password.value;
    console.log(emailValue, passwordValue);
    createUserWithEmailAndPassword(auth, emailValue, passwordValue)
    .then((res) => {
        const user = res.user;
        console.log(user);
        setDoc(doc(db, "users", user.uid),  {
            email: email.value,
            phone: phone.value,
            address: address.value,
            id: id.value,

        }).then(() => {
            console.log("success");
            window.location.href = "dashboard.html";
        }).catch((error) => {
            console.log(error);
        })
        localStorage.setItem("user", user.accessToken);
    }).catch((error)=> {
        alert(error.message);
    })
    
 });








