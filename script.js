const images = document.querySelectorAll(".gallery img");
const popup = document.getElementById("popup");
const popupImg = document.getElementById("popup-img");
const popupText = document.getElementById("popup-text");
const close = document.querySelector(".close");

images.forEach(img => {
    img.addEventListener("click", () => {
        popup.style.display = "flex";
        popupImg.src = img.src;
        popupText.textContent = img.dataset.name;
    });
});

close.addEventListener("click", () => {
    popup.style.display = "none";
});

popup.addEventListener("click", (e) => {
    if (e.target === popup) {
        popup.style.display = "none";
    }
});

function calculateTotal() {
    let total = 0;
    let items = document.querySelectorAll(".category li");

    items.forEach(item => {
        let checkbox = item.querySelector("input[type='checkbox']");
        if (checkbox.checked) {
            let text = item.textContent;
            let priceMatch = text.match(/(\d+)\s*LKR/);
            if (priceMatch) {
                total += parseInt(priceMatch[1]);
            }
        }
    });

    if (total > 0) {
        document.getElementById("totalPrice").innerHTML =
            "Total Price: " + total + " LKR";
        document.getElementById("orderMessage").innerHTML =
            "Order placed successfully! Thank you for ordering from TastyBites.";
    } else {
        document.getElementById("totalPrice").innerHTML = "";
        document.getElementById("orderMessage").innerHTML =
            "Please select at least one item to place an order.";
    }
}
