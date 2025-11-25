🛍️ ShopHub – Product Listing Application

A modern, feature-rich e-commerce product listing application built by me using React, Vite, and Tailwind CSS.
This project demonstrates clean component architecture, state management, responsive UI, infinite scrolling, and practical e-commerce features.

✨ Features
Core Features

🔍 Real-time Search — Filter products instantly by name

📂 Category Filter — Browse items by category

♾️ Infinite Scroll — Automatically load more products as you scroll

📱 Fully Responsive — Works beautifully on mobile, tablet, and desktop

🎨 Modern UI — Built with clean Tailwind CSS utilities

Advanced Features

🌓 Dark/Light Theme Toggle (with saved preference)

🔢 Sorting System — Sort by price (asc/desc) or rating

🛒 Shopping Cart — Add/remove items, update quantity

⚡ Shimmer/Skeleton Loading

🎭 Smooth UI Animations

💾 Optimized Rendering

🏷️ Discount Badges

⭐ Rating & Stock Indicators

🚀 Quick Start
Prerequisites

Node.js v16+

npm or yarn

Installation
npm install

Start Dev Server
npm run dev


Open in browser:
http://localhost:5173

📦 Project Structure

My project is built with modular, reusable components — not a single large component.
This keeps the app scalable and easy to maintain.

product-listing-app/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── ProductCard.jsx
│   │   ├── SearchBar.jsx
│   │   ├── CategoryFilter.jsx
│   │   ├── SortMenu.jsx
│   │   ├── CartDrawer.jsx
│   │   └── ShimmerCard.jsx
│   ├── context/
│   │   └── CartContext.jsx
│   ├── hooks/
│   │   └── useInfiniteScroll.js
│   ├── pages/
│   │   └── Home.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md

🛠️ Technology Stack

React 18

Vite

Tailwind CSS

Axios

Lucide Icons

React Context API

DummyJSON API

📱 Responsive Layout

Mobile: 2 columns

Tablet: 3 columns

Desktop: 4 columns

Large Desktop: 5 columns

🎨 Color System

Primary Blue: #3b82f6

Light Background: #f9fafb

Dark Background: #111827

Accent colors for highlights, discounts, and alerts

🔧 Available Scripts
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build

🌐 Deployment
Vercel (Recommended)

Push repo to GitHub

Import repo into Vercel

Deploy (Vercel auto-detects Vite)

Netlify
npm run build


Upload /dist folder to Netlify.

🎯 API Information

Using the DummyJSON Products API:

https://dummyjson.com/products
?limit=20&skip=0


No authentication required.

🚀 Performance Optimizations

Lazy-loaded images

Efficient infinite scroll using Intersection Observer

Shimmer loaders for smooth UX

Debounced search input

Organized component-based architecture

Tailwind auto-purging (small CSS bundle)

🔮 Future Enhancements

Product details page (routing)

Wishlist functionality

Authentication

Checkout & Payment

Reviews & ratings

Social share

PWA support

Backend integration

🐛 Troubleshooting

Port 3000 already in use

npx kill-port 3000


Tailwind not applying

rm -rf node_modules .vite dist
npm install
npm run dev


Products not loading

Check your internet

Verify API: https://dummyjson.com/products

Check browser console

📝 License

MIT License — free to use, modify, and improve.

👨‍💻 Author

This project was built entirely by me using React, Vite, and Tailwind CSS.
Created as part of my learning, portfolio, and internship preparation.