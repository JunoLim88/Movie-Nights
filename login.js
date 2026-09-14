 // When the form is submitted, remember the email and go to the shop.
    document.getElementById("loginform").addEventListener("submit", function (event) {
      event.preventDefault();                          // stop the page reloading
      var name = document.getElementById("name").value;
      sessionStorage.setItem("shopUser", name);       // remember who signed in
      location.href = "index.html";                    // go to the shop
    });