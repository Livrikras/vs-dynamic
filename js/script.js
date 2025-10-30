"use strict";

//Datastruktur for vores OOUX-model repræsenteret med JavaScript
const products = [
  { name: "iphone17", price: 8999, color: "Black" },
  { name: "iphone13", price: 6999, color: "White" },
  { name: "iphone8", price: 2999, color: "Gold" },
  { name: "iphone16", price: 7999, color: "Black" },
];

// Henter DOM elementer og tildeler dem et passende variablenavn
const displayDataBtn = document.getElementById("displayData");
const resetDataBtn = document.getElementById("resetData");

displayDataBtn.addEventListener("click", function () {
  let productDetails = "";
  products.forEach((item) => {
    productDetails += `
            <div class="generated-card">
                <p>Product Name: ${item.name}</p>
                <p>Price: ${item.price}</p>
                <p>Color: ${item.color}</p>
            </div>
        `;
  });
  document.getElementById("container").innerHTML = productDetails;
});


