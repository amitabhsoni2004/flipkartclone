// let searchbar = document.getElementById("searchbar");
// searchbar.addEventListener("click", () => {
//     searchbar.style.border = "none";
// })

let imageUrl = [
    "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/88a387d43cef39e5.png?q=20",
    "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/66e1949c1f88b21c.jpg?q=20",
    "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/6d92c18feb12b119.jpg?q=20",
    "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/c096498cafe9027c.png?q=20",
    "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/d05c680ac784bef4.png?q=20","https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/e4bf2a96a311355e.jpg?q=20"
];

let imgTag = document.getElementById('img');
let x = 0; // Current image index

setInterval(() => {
    x = (x + 1) % imageUrl.length; // Increment x, loop back to 0 if at the end
    imgTag.setAttribute('src', imageUrl[x]);
}, 2000);
x=0;
function next() {
    x = (x + 1) % imageUrl.length; // Increment x, loop back to 0 if at the end
    imgTag.setAttribute('src', imageUrl[x]);

    clearInterval();
}
function prev() {
    x = (x - 1 + imageUrl.length) % imageUrl.length; // Decrement x, loop to the last if at the beginning
    imgTag.setAttribute('src', imageUrl[x]);
}


const isMobile = window.matchMedia('(max-width: 767px)').matches;

function updateLoginText() {
    let loginElement = document.querySelector(".login");
    if (isMobile) {
        loginElement.textContent = "You";
    } else {
        loginElement.textContent = "Login";
    }
}

updateLoginText();
window.addEventListener('resize', () => {
    isMobile = window.matchMedia('(max-width: 767px)').matches;
    updateLoginText();
});
