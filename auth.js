import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCx4850l9ipgah6vPv_fY_iXj2_-n_c_eo",
  authDomain: "sedrick-store.firebaseapp.com",
  projectId: "sedrick-store",
  storageBucket: "sedrick-store.firebasestorage.app",
  messagingSenderId: "122922689722",
  appId: "1:122922689722:web:6636fa538964b4494c4e83"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();

document.getElementById("googleLoginBtn").addEventListener("click", () => {

  signInWithPopup(auth, provider)
    .then((result) => {
      alert("Welcome " + result.user.displayName);
      window.location.href = "profile.html";
    })
    .catch((error) => {
      alert(error.message);
    });

});