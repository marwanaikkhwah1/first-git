const menuBtn = document.getElementById("menubtn");
const sidebar = document.querySelector(".sidebar");

menuBtn.addEventListener("click", function () {
    console.log("Menu clicked");

    sidebar.classList.toggle("collapsed");
    document.body.classList.toggle("sidebar-collapsed");
});
const logoutBtn = document.getElementById("logoutBtn");

logoutBtn.addEventListener("click", function () {
    window.location.href = "../Medical Clinic/clinic.html";
});