let hostname = "http://localhost:3000";

if (process.env.NODE_ENV !== "development") {
  hostname = "https://yubico-products.vercel.app";
}

export async function getAllProductsData() {
  try {
    const products = await fetchProducts();

    return products;
  } catch (e) {
    console.log(e);
  }
}

export async function getAllProductIds() {
  try {
    const products = await fetchProducts();

    return products.map((product) => {
      return {
        params: {
          id: product.product_id.toString(),
        },
      };
    });
  } catch (e) {
    console.log(e);
  }
}

export async function getProductData(id) {
  try {
    const products = await fetchProducts();

    return products.find((product) => product.product_id.toString() === id);
  } catch (e) {
    console.log(e);
  }
}

async function fetchProducts() {
  const res = await fetch(`${hostname}/products.json`);
  const data = await res.json();
  const products = data.products.filter((product) => product.is_available);

  return products;
}
