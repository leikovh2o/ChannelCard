function priceService(baseUrl) {
  const httpMethod = {
    GET: "GET",
    POST: "POST",
    PUT: "PUT",
    DELETE: "DELETE"
  }

  async function getPriceAsync() {
    const url = baseUrl;

    var Price = await executeRequestAsync(url + "/api/Card/GetPrice", httpMethod.GET, "Extragerea a fost efectuata cu succes");

    const price = [];

    return price;
  }

  async function executeRequestAsync(url, httpMethod, succesMessage){
    return await $.ajax({
      async: true,
      url: url,
      type: httpMethod,
      contentType: "application/json",
      success: (xhr, status, error) => console.log(successMessage)
    })
  }
  
  return{
    getPriceAsync: getPriceAsync
  }

}