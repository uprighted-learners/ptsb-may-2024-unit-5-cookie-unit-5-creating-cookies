console.log(document.cookie);
if (document.cookie.includes("theme=")) {
  const theme = document.cookie
    .split(";")
    .find((c) => c.startsWith("theme="))
    .split("=")
    .at(1);

  if (theme === "light-mode") {
    document.body.classList.add("light-mode");
    document.body.classList.remove("dark-mode");
  } else if (theme === "dark-mode") {
    document.body.classList.add("dark-mode");
    document.body.classList.remove("light-mode");
  }
}

const lightButton = document.querySelector("#light");
const darkButton = document.querySelector("#dark");

lightButton.addEventListener("click", () => {
  resp = fetch("/light-mode");
});
darkButton.addEventListener("click", () => {
  resp = fetch("/dark-mode");
});
