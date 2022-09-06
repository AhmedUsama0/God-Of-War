window.onload = () => {
  finishLoading();
  getNavBar("layouts/navbar.html");
};

const getNavBar = async (path) => {
  const navigation = await fetch(path).then((res) => res.text());
  navbar.innerHTML = navigation;
  const parser = new DOMParser(),
    doc = parser.parseFromString(navigation, "text/html");
  new Function(doc.querySelector("script").textContent)();
};

const finishLoading = () => {
  loader.style.opacity = "0";
  loader.style.zIndex = "-1";
};

export { getNavBar, finishLoading };
