let searchbar = document.getElementById("searchbar");
searchbar.addEventListener("click", () => {
    searchbar.style.border = "none";
})

let imageUrl = [
    "https://rukminim1.flixcart.com/fk-p-flap/480/80/image/88a387d43cef39e5.png?q=20",
    "https://rukminim1.flixcart.com/fk-p-flap/1000/170/image/66e1949c1f88b21c.jpg?q=20",
    "https://rukminim1.flixcart.com/fk-p-flap/1000/170/image/e4bf2a96a311355e.jpg?q=20",
    "https://rukminim1.flixcart.com/fk-p-flap/1000/170/image/c096498cafe9027c.png?q=20","https://rukminim1.flixcart.com/fk-p-flap/1000/170/image/c096498cafe9027c.png?q=20","https://rukminim1.flixcart.com/fk-p-flap/1000/170/image/6d92c18feb12b119.jpg?q=20"
];

let imgTag = document.getElementById('img');
let x = 0; // Current image index

function next() {
    x = (x + 1) % imageUrl.length; // Increment x, loop back to 0 if at the end
    imgTag.setAttribute('src', imageUrl[x]);
}

function prev() {
    x = (x - 1 + imageUrl.length) % imageUrl.length; // Decrement x, loop to the last if at the beginning
    imgTag.setAttribute('src', imageUrl[x]);
}
