let products = [
  {
    id: 1,
    sku: "abc",
    productName: "name 1",
    category: 1,
  },
  {
    id: 2,
    sku: "def",
    productName: "name 2",
    category: 2,
  },
  {
    id: 3,
    sku: "ghi",
    productName: "name 1",
    category: 2,
  },
  {
    id: 4,
    sku: "klm",
    productName: "name 1",
    category: 3,
  },
  {
    id: 5,
    sku: "xyz",
    productName: "name 1",
    category: 1,
  },
];

let pricing = [
  {
    sku: "abc",
    price: 10,
  },
  {
    sku: "def",
    price: 20,
  },
  {
    sku: "ghi",
    price: 30,
  },
  {
    sku: "klm",
    price: 40,
  },
  {
    sku: "xyz",
    price: 50,
  },
];

let categories = [
  {
    id: 1,
    name: "category1",
  },
  {
    id: 2,
    name: "category2",
  },
  {
    id: 3,
    name: "category3",
  },
  {
    id: 4,
    name: "category4",
  },
  {
    id: 5,
    name: "category5",
  },
];

// First way with time complexity of O(n^2)

function mergeArrays(products, pricing) {
  const mergedArray = products.map((product, index) => {
    let priceObj = pricing.filter(
      (value, index) => value.sku === product.sku
    )[0];
    if (priceObj) {
      product.price = priceObj.price;
    }
    return product;
  });

  return mergedArray;
}

console.log(mergeArrays(products, pricing));

// Second way with time complexity of O(n)

function mergeArrays(products, pricing) {
  const pricingMap = new Map(
    pricing.map((priceObj) => [priceObj.sku, priceObj.price])
  );

  const mergedArray = products.map((product) => {
    if (pricingMap.has(product.sku)) {
      product.price = pricingMap.get(product.sku);
    }
    return product;
  });

  return mergedArray;
}

console.log(mergeArrays(products, pricing));
