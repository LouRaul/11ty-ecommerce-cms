module.exports = {
  categories: [
    {
      name: "Electronics",
      slug: "electronics",
      description: "Latest gadgets and electronic devices",
      image: "/assets/images/electronics.jpg"
    },
    {
      name: "Clothing",
      slug: "clothing",
      description: "Trendy fashion and accessories",
      image: "/assets/images/clothing.jpg"
    }
  ],
  featured: [
    {
      title: "Smartphone",
      slug: "smartphone",
      category: "Electronics",
      price: 699.99,
      description: "Latest smartphone with amazing features",
      image: "/assets/images/smartphone.jpg",
      features: [
        "6.7-inch OLED display",
        "5G connectivity",
        "48MP camera system"
      ]
    },
    {
      title: "T-Shirt",
      slug: "cotton-t-shirt",
      category: "Clothing",
      price: 29.99,
      description: "Comfortable cotton t-shirt",
      image: "/assets/images/tshirt.jpg",
      features: [
        "100% organic cotton",
        "Sustainable production",
        "Machine washable"
      ]
    }
  ]
};