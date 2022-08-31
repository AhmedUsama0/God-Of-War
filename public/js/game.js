window.onload = function () {
  let loader = document.querySelector("#loader");
  (loader.style.opacity = "0"), (loader.style.zIndex = "-1");
  let navbar = document.querySelector("#navbar");
  fetch("./layouts/navbar.html")
    .then((res) => res.text())
    .then((data) => {
      navbar.innerHTML = data;
      let parser = new DOMParser(),
        doc = parser.parseFromString(data, "text/html");
      eval(doc.querySelector("script").textContent);
    });
};
