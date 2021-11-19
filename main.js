const navBtn = document.getElementById("navigation-btn");

navBtn.addEventListener("click", (event) => {
  const navLine = document.getElementById("navigation-btn--line");
  const navigation = document.getElementById("navigation");

  navLine.classList.toggle("active");
  navigation.classList.toggle("active");
});
