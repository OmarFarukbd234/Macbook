// Function for price of every Products
function priceOfProduct(priceId, price) {
  const productCost = document.getElementById(priceId);
  productCost.innerText = parseInt(price);
  calculateTotal();
}

// Total Price
function calculateTotal() {
  const memoryCost = document.getElementById("memory-total").innerText;
  const storageCost = document.getElementById("storage-total").innerText;
  const deliveryCost = document.getElementById("delivery-total").innerText;
  const totalPrice = document.getElementById("all-price");
  const totalOverAll = document.getElementById("totalOverAll");
  totalPrice.innerText =
    parseInt(memoryCost) +
    parseInt(storageCost) +
    parseInt(deliveryCost) +
    1299;
  totalOverAll.innerText = totalPrice.innerText;
}

// Memory Calculation
document.getElementById("8gb-btn").addEventListener("click", function () {
  priceOfProduct("memory-total", 0);
});

document.getElementById("16gb-btn").addEventListener("click", function () {
  priceOfProduct("memory-total", 180);
});

//Storage calculation
document.getElementById("256gb-storage").addEventListener("click", function () {
  priceOfProduct("storage-total", 0);
});

document.getElementById("512gb-storage").addEventListener("click", function () {
  priceOfProduct("storage-total", 100);
});

document.getElementById("1tb-storage").addEventListener("click", function () {
  priceOfProduct("storage-total", 180);
});

//Delivery Calculation
document
  .getElementById("delivery-basic")
  .addEventListener("click", function () {
    priceOfProduct("delivery-total", 0);
  });

document
  .getElementById("delivery-premium")
  .addEventListener("click", function () {
    priceOfProduct("delivery-total", 20);
  });

// Promo check
document.getElementById("promo-btn").addEventListener("click", function () {
  const promoField = document.getElementById("promo-field");
  const totalPrice = document.getElementById("all-price");
  const totalOverAll = document.getElementById("totalOverAll");
  if (promoField.value == "stevekaku") {
    const discount = (parseInt(totalPrice.innerText) / 100) * 20;
    totalOverAll.innerText = parseInt(totalPrice.innerText) - discount;
  } else {
    totalOverAll.innerText = parseInt(totalPrice.innerText);
  }
  promoField.value = "";
});
