function priceService(baseUrl) {
  const httpMethod = {
    GET: "GET",
    POST: "POST",
    PUT: "PUT",
    DELETE: "DELETE"
  }

  async function getPriceAsync() {
    const url = baseUrl + "/api/Card/GetPrice";

    var card = await executeRequestAsync(url, httpMethod.GET, "Extragerea a fost efectuata cu succes");

    card = JSON.parse(card)

    return card.price;
  }

  async function executeRequestAsync(url, httpMethod, succesMessage){
    return await $.ajax({
      async: true,
      url: url,
      type: httpMethod,
      contentType: "application/json",
      success: (xhr, status, error) => console.log(succesMessage)
    })
  }
  
  return{
    getPriceAsync: getPriceAsync
  }

}