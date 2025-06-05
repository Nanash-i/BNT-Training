function saveToLocal() {
    localStorage.setItem("FirstName", document.getElementById("FirstName").value);
    localStorage.setItem("LastName", document.getElementById("LastName").value);
    localStorage.setItem("email", document.getElementById("email").value);
      localStorage.setItem("phone", document.getElementById("phone").value);
      alert("Saved to localStorage");
    }

    function saveToSession() {
      sessionStorage.setItem("FirstName", document.getElementById("FirstName").value);
      sessionStorage.setItem("LastName", document.getElementById("LastName").value);
      sessionStorage.setItem("email", document.getElementById("email").value);
      sessionStorage.setItem("phone", document.getElementById("phone").value);
      alert("Saved to sessionStorage");
    }

    function loadFromStorage() {
        document.getElementById("FirstName").value = sessionStorage.getItem("FirstName") || localStorage.getItem("FirstName") || "";
        document.getElementById("LastName").value = sessionStorage.getItem("LastName") || localStorage.getItem("LastName") || "";
        document.getElementById("email").value = sessionStorage.getItem("email") || localStorage.getItem("email") || "";
        document.getElementById("phone").value = sessionStorage.getItem("phone") || localStorage.getItem("phone") || "";
    }

    function clearStorage() {
      localStorage.clear();
      sessionStorage.clear();
      alert("All storage cleared");
    }

