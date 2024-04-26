let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

let item = "";

let products = [
  { name: "Product 1", price: "$10" },
  { name: "Product 2", price: "$15" },
  { name: "Product 3", price: "$20" },
  { name: "Product 4", price: "$25" },
  { name: "Product 5", price: "$30" },
  { name: "Product 6", price: "$35" }
];

let itemElements = document.querySelectorAll(".item");

itemElements.forEach((itemElement, index) => {
  let btn = itemElement.querySelector(".btn");
  let product = products[index];
  let productName = product.name;
  let productPrice = product.price;

  let productInfoSpan = document.createElement("span"); // Создаем элемент span
  productInfoSpan.innerHTML = `${productName} ${productPrice}`; // Объединяем название и цену в одну строку
  productInfoSpan.classList.add("product-info");

  itemElement.insertBefore(productInfoSpan, btn);

  btn.addEventListener("click", function(){
    if (tg.MainButton.isVisible) {
      tg.MainButton.hide();
    }
    else {
      tg.MainButton.setText(`Вы выбрали ${productName}!`);
      item = `${index + 1}`;
      tg.MainButton.show();
    }
  });
});

Telegram.WebApp.onEvent("mainButtonClicked", function(){
  tg.sendData(item);
});

let usercard = document.getElementById("usercard");

let p = document.createElement("p");
p.innerText = `${tg.initDataUnsafe.user.first_name} ${tg.initDataUnsafe.user.last_name}`;
usercard.appendChild(p);
