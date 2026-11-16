
const photoInput = document.getElementById("photoInput");
const profilePhoto = document.getElementById("profilePhoto");

photoInput.addEventListener("change", function () {
    const file = this.files[0];

    if (file) {
        profilePhoto.src = URL.createObjectURL(file);
    }
});

function editProfile() {
    const name = prompt("Enter your name:");
    const email = prompt("Enter your email:");

    if (name) {
        document.getElementById("displayName").textContent = name;
    }

    if (email) {
        document.getElementById("displayEmail").textContent = email;
    }
}
