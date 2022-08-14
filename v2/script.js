const html = document.querySelector("html");

html.classList.add("bg-dark");

// darkmode switch
document.querySelector("input").addEventListener("change", (event) => {
  bgSwitch(event);
});

const bgSwitch = (event) => {
  if (event.target.checked) {
    html.classList.add("bg-dark");
  } else {
    html.classList.remove("bg-dark");
  }
};
