const baseURL = import.meta.env.VITE_SERVER_URL;

 export async function convertToJson(res) {
   if (res.ok) {
     return await res.json();
    } else {
      const jsonResponse = await res.json();
      throw { name: 'servicesError', message: jsonResponse }; 
  }
}

export async function getProductsByCategory(category = "tents") {
  const response = await fetch(baseURL + `products/search/${category}`);
  const data = await convertToJson(response);
  return data.Result;
}

export async function submitOrder(order) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(order),
  };
  return await fetch(baseURL + "checkout/", options).then(convertToJson);
}


export async function findProductById(id) {
  const response = await fetch(baseURL + `product/${id}`);
  const product = await convertToJson(response);
  return product.Result;  

}

export async function loginRequest(creds) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(creds),
  };
  return await fetch(baseURL + "login", options).then(convertToJson);
}

export async function getOrders(token) {
  console.log(`getting orders with token: ${token}`);
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await fetch(baseURL + "orders", options).then(convertToJson);
  return response;
}