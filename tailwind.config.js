/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.js","./src/App.js", "./src/components/CartItem.js", "./src/components/Footer.js", "./src/components/Header.js", 
    "./src/components/Hero.js", "./src/components/Product.js", "./src/components/Sidebar.js", "./src/contexts/CartContext.js",  "./src/contexts/ProductContext.js",
    "./src/contexts/SidebarContext.js", "./src/pages/Home.js", "./src/pages/ProductDetails.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

