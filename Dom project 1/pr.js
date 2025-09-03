// Select all needed elements
const plusBtns = document.querySelectorAll(".fa-plus-circle");
const minusBtns = document.querySelectorAll(".fa-minus-circle");
const deleteBtns = document.querySelectorAll(".fa-trash-alt");
const heartBtns = document.querySelectorAll(".fa-heart");
const totalPrice = document.querySelector(".total");

// Function to update the total price
function updateTotal() {
  let total = 0;
  const cards = document.querySelectorAll(".card-body");
  cards.forEach((card) => {
    const unitPrice = parseInt(
      card.querySelector(".unit-price").textContent.replace("$", "")
    );
    const quantity = parseInt(card.querySelector(".quantity").textContent);
    total += unitPrice * quantity;
  });
  totalPrice.textContent = total + " $";
}

// Increase quantity
plusBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const quantityElem = btn.nextElementSibling;
    let quantity = parseInt(quantityElem.textContent);
    quantity++;
    quantityElem.textContent = quantity;
    updateTotal();
  });
});

// Decrease quantity
minusBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const quantityElem = btn.previousElementSibling;
    let quantity = parseInt(quantityElem.textContent);
    if (quantity > 0) {
      quantity--;
      quantityElem.textContent = quantity;
      updateTotal();
    }
  });
});

// Delete product
deleteBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.closest(".card-body").remove();
    updateTotal();
  });
});

// Like product (toggle heart color)
heartBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.style.color = btn.style.color === "red" ? "black" : "red";
  });
});
