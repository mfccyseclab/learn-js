document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container");

  // Fetch products from the JSON file
  fetch("products.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((products) => {
      // Loop through the products and display them on the page
      products.forEach((product) => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        productCard.innerHTML = `
          <img src="${product.image}" alt="${product.name}">
          <div class="details">
            <span class="product-name">${product.name}</span>
            <span class="product-price" data-price="${product.price}">₦${product.price}</span>
          </div>
          <div class="coupon-section">
            <input type="text" class="coupon-input" placeholder="Enter coupon code" data-coupon="${product.couponCode}">
            <button class="buy-btn">Buy</button>
          </div>
        `;

        container.appendChild(productCard);
      });

      // Add event listeners for coupon validation
      document.querySelectorAll(".coupon-input").forEach((input) => {
        input.addEventListener("change", function () {
          const enteredCode = this.value.trim();
          const validCode = this.dataset.coupon;
          const priceElement = this.closest(".product-card").querySelector(".product-price");

          if (enteredCode === validCode) {
            priceElement.textContent = "₦0.00";
          } else {
            alert("Invalid coupon code.");
            this.value = ""; // Clear invalid input
          }
        });
      });

      // Add event listeners for the Buy buttons
      document.querySelectorAll(".buy-btn").forEach((button) => {
        button.addEventListener("click", function () {
          const priceElement = this.closest(".product-card").querySelector(".product-price");
          if (priceElement.textContent === "₦0.00") {
            alert("Product purchased successfully!");
          } else {
            alert("Please enter a valid coupon code or pay the full price.");
          }
        });
      });
    })
    .catch((error) => {
      console.error("Error fetching products:", error);
      container.innerHTML = `<p>Failed to load products. Please try again later.</p>`;
    });
});