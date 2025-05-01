export const products = [
    {
      "category_id": "C001",
      "product_id": "P001",
      "category": "Snacks",
      "brand": "Lays Classic",
      "description": "Crispy and lightly salted potato chips.",
      "size": "200g",
      "stock": 120,
      "price": 1.99,
      "image": "/api/placeholder/300/300"
    },
    {
      "category_id": "C001",
      "product_id": "P002",
      "category": "Snacks",
      "brand": "Oreo",
      "description": "Chocolate sandwich cookies with creamy filling.",
      "size": "154g",
      "stock": 80,
      "price": 2.49,
      "image": "/api/placeholder/300/300"
    },
    {
      "category_id": "C002",
      "product_id": "P003",
      "category": "Drinks",
      "brand": "Coca-Cola",
      "description": "Carbonated soft drink.",
      "size": "500mL",
      "stock": 200,
      "price": 1.25,
      "image": "/api/placeholder/300/300"
    },
    {
      "category_id": "C002",
      "product_id": "P004",
      "category": "Drinks",
      "brand": "Red Bull",
      "description": "Energy drink with caffeine and taurine.",
      "size": "250mL",
      "stock": 150,
      "price": 2.10,
      "image": "/api/placeholder/300/300"
    },
    {
      "category_id": "C003",
      "product_id": "P005",
      "category": "Toiletries",
      "brand": "Dove",
      "description": "Moisturizing body wash.",
      "size": "400mL",
      "stock": 60,
      "price": 5.99,
      "image": "/api/placeholder/300/300"
    },
    {
      "category_id": "C003",
      "product_id": "P006",
      "category": "Toiletries",
      "brand": "Colgate",
      "description": "Fluoride toothpaste for healthy gums.",
      "size": "100g",
      "stock": 90,
      "price": 3.49,
      "image": "/api/placeholder/300/300"
    },
    {
      "category_id": "C004",
      "product_id": "P007",
      "category": "Household",
      "brand": "Tide",
      "description": "Liquid laundry detergent.",
      "size": "1L",
      "stock": 50,
      "price": 6.99,
      "image": "/api/placeholder/300/300"
    },
    {
      "category_id": "C004",
      "product_id": "P008",
      "category": "Household",
      "brand": "Palmolive",
      "description": "Dishwashing liquid, tough on grease.",
      "size": "500mL",
      "stock": 70,
      "price": 2.99,
      "image": "/api/placeholder/300/300"
    },
    {
      "category_id": "C002",
      "product_id": "P009",
      "category": "Drinks",
      "brand": "Aquafina",
      "description": "Purified bottled water.",
      "size": "1L",
      "stock": 300,
      "price": 0.99,
      "image": "/api/placeholder/300/300"
    },
    {
      "category_id": "C001",
      "product_id": "P010",
      "category": "Snacks",
      "brand": "Kinder Bueno",
      "description": "Wafer bar with creamy hazelnut filling.",
      "size": "43g",
      "stock": 100,
      "price": 1.75,
      "image": "/api/placeholder/300/300"
    }
  ];
  
  export const categories = [
    { id: "C001", name: "Snacks", icon: "🍪" },
    { id: "C002", name: "Drinks", icon: "🥤" },
    { id: "C003", name: "Toiletries", icon: "🧴" },
    { id: "C004", name: "Household", icon: "🧹" }
  ];
  
  export const getFeaturedProducts = () => {
    return products.slice(0, 4);
  };
  
  export const getProductsByCategory = (categoryId) => {
    return products.filter(product => product.category_id === categoryId);
  };
  
  export const getProductById = (id) => {
    return products.find(product => product.product_id === id);
  };