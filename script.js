function LogIn() {
  username = document.getElementById("username").value;
  password = document.getElementById("password").value;
  if (username == "test" && password == "test123") {
    document.getElementsByClassName("signin")[0].style.width = "800px";
    document.getElementsByClassName("content")[0].style.display = "none";
    document.getElementsByClassName("getDevices")[0].style.display = "block";

    let xhr = new XMLHttpRequest();
    let info = {
      userName: "test",
      password: "test123",
    };
    xhr.open("POST", "https://api.sardorsohinazarov.uz/api/Auth/Login");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(info));

    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        let dataObject = JSON.parse(xhr.response);
        localStorage.setItem("accessToken", dataObject.accessToken);
      }
    };

    let token = "Bearer " + localStorage.getItem("accessToken");
    fetch("https://api.sardorsohinazarov.uz/api/Devices/GetAll", {
      method: "GET",
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("HTTP error " + response.status);
        }
        return response.json();
      })
      .then((data) => {
        for (let i = 0; i < data.length; i++) {
          let z = `<tr><td>${data[i].id}</td><td>${data[i].fullName}</td><td>${data[i].phoneNumber}</td><td>${data[i].deviceId}</td><td>${data[i].carNumber}</td></tr>`;
          document.getElementById("zaybal").innerHTML += z;
        }
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  } else {
    document.getElementById("error").style.display = "block";
    setTimeout(function () {
      document.getElementById("error").style.display = "none";
    }, 1000);
  }
}
