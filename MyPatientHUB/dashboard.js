const menuBtn = document.getElementById("menubtn");
const sidebar = document.querySelector(".sidebar");

menuBtn.addEventListener("click", function () {
    console.log("Menu clicked");

    sidebar.classList.toggle("collapsed");
    document.body.classList.toggle("sidebar-collapsed");
});