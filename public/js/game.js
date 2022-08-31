window.onload = function () {
  const loader = document.querySelector("#loader");
  loader.style.opacity = "0";
  loader.style.zIndex = "-1";
  const navbar = document.querySelector("#navbar");
  // fetch the html file
  fetch("/layouts/navbar.html")
    // when fetching success resolve the promise to a string using text() method
    .then((res) => res.text())
    .then((data) => {
      // console.log(data);
      // then use the resolved promise which is a string html to display inside the navbar
      navbar.innerHTML = data;
      // make an object from DOMParser
      const parser = new DOMParser();
      // convert the html string to a html document
      const doc = parser.parseFromString(data, "text/html");
      // evaluate the javascript expression as a script
      eval(doc.querySelector("script").textContent);
    });
};
