function toggleMenu() {
    const menu = document.getElementById("menu");
    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}

function togglePhone() {
    const phone = document.getElementById("phone");
    if (phone.style.display === "none" || phone.style.display === "") {
        phone.style.display = "block";
    } else {
        phone.style.display = "none";
    }
}
