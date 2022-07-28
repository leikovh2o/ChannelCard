$(document).ready(LoadDocument);

async function LoadDocument(){
  const PriceService = priceService("http://localhost:8010/proxy");
  const prices = await PriceService.getPriceAsync();
  const cardPrice = document.getElementById("price");

  cardPrice.innerHTML = prices.toFixed(2) + "$";


  console.log(prices)
}

