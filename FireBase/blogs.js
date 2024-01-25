
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";
import {getFirestore, collection, getDocs} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-firestore.js";
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
const db = getFirestore(app);

const blogList = document.getElementById("blogList")


const querySnapshot = await getDocs(collection(db, "blog"));

querySnapshot.forEach((doc) => {
    const data = doc.data();
    blogList.innerHTML += `
    <div class="col-md-4">
    <div class="card mb-4 shadow-sm">
    <div class="card-body">
    <div class="border">
    <h5 class="card-title">${data.title}</h5>
    <p class="card-text">${data.description}</p>
    </div>
    `
})