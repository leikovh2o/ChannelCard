$(document).ready(LoadDocument);

async function LoadDocument(){
  const PriceService = priceService("https://eae15a22-fdbb-4295-94e9-21543e090677.mock.pstmn.io");
  const prices = await PriceService.getPriceAsync();
  const cardPrice = document.getElementById("price");
  const cartBtn = document.getElementsByClassName("cart-btn");

  cardPrice.innerHTML = prices.toFixed(2) + "$";



  console.log(prices)
}

