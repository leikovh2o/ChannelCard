$(document).ready(LoadDocument);
async function LoadDocument(){
  const PriceService = priceService("http://localhost:5055");
  const prices = await PriceService.getPriceAsync();

  console.log(prices)
}