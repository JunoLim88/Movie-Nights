// ----- Log out -----
document.getElementById("logout").addEventListener("click", function () {
  sessionStorage.removeItem("shopUser");
  location.href = "login.html";
});