import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";
import {doc, getFirestore, setDoc} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-firestore.js";
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

const email = document.getElementById("email");
const password = document.getElementById("password");

const auth = getAuth();
const signIn = document.getElementById("submit");

signIn.addEventListener("click", (e) => {
    e.preventDefault();
    const emailValue = email.value;
    const passwordValue = password.value;
    console.log(emailValue, passwordValue);
    signInWithEmailAndPassword(auth, emailValue, passwordValue)
    .then((res) => {
        const user = res.user;
        console.log(user);
        localStorage.setItem("user", user.accessToken);
        window.location.href = "dashboard.html";
    }).catch((error)=> {
        alert(error.message);
    })
    
 });