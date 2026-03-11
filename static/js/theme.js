const toggle = document.getElementById("theme-toggle")

toggle.onclick = () => {

document.documentElement.classList.toggle("dark")

localStorage.theme =
document.documentElement.classList.contains("dark")

}
