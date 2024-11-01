import { Category, Product } from "../types";

export const mockProducts: Product[] = [
  {
    id: 1,
    title: "Premium Wireless Headphones",
    price: 299.99,
    description: "High-quality wireless headphones with active noise cancellation, 30-hour battery life, and premium sound quality.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80"
  },
  {
    id: 2,
    title: "Modern Desk Lamp",
    price: 89.99,
    description: "Elegant desk lamp with adjustable brightness, color temperature, and wireless charging base.",
    category: "home",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&q=80"
  },
  {
    id: 3,
    title: "Denim Jacket",
    price: 129.99,
    description: "Classic denim jacket with modern fit, premium quality cotton, and vintage wash finish.",
    category: "clothing",
    image: "https://images.unsplash.com/photo-1523205771623-e0faa4d2813d?w=800&q=80"
  },
  {
    id: 4,
    title: "Smart Watch Series X",
    price: 399.99,
    description: "Advanced smartwatch with health tracking, cellular connectivity, and 2-day battery life.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80"
  },
  {
    id: 5,
    title: "Minimalist Wall Clock",
    price: 49.99,
    description: "Silent wall clock with scandinavian design, perfect for modern home decor.",
    category: "home",
    image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=800&q=80"
  },
  {
    id: 6,
    title: "Wool Blend Sweater",
    price: 89.99,
    description: "Cozy wool blend sweater with ribbed details and relaxed fit, perfect for winter.",
    category: "clothing",
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80"
  },
  {
    id: 7,
    title: "Wireless Gaming Mouse",
    price: 79.99,
    description: "High-precision wireless gaming mouse with RGB lighting and programmable buttons.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&q=80"
  },
  {
    id: 8,
    title: "Ceramic Plant Pot",
    price: 34.99,
    description: "Handcrafted ceramic plant pot with drainage hole and modern geometric design.",
    category: "home",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=800&q=80"
  },
  {
    id: 9,
    title: "Leather Sneakers",
    price: 159.99,
    description: "Premium leather sneakers with comfortable cushioning and versatile design.",
    category: "clothing",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80"
  },
  {
    id: 10,
    title: "4K Webcam",
    price: 199.99,
    description: "Professional 4K webcam with auto-focus, low-light correction, and dual microphones.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1520904452068-9903562979c8?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 11,
    title: "Throw Blanket",
    price: 45.99,
    description: "Soft and cozy throw blanket made from recycled materials with modern pattern.",
    category: "home",
    image: "https://images.unsplash.com/photo-1580301762395-21ce84d00bc6?w=800&q=80"
  },
  {
    id: 12,
    title: "Cotton T-Shirt",
    price: 29.99,
    description: "Essential organic cotton t-shirt with perfect fit and sustainable production.",
    category: "clothing",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80"
  },
  {
    id: 13,
    title: "Portable SSD",
    price: 149.99,
    description: "1TB portable SSD with USB-C, shock resistance, and ultra-fast transfer speeds.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1563642421748-5047b6585a4a?w=800&q=80"
  },
  {
    id: 14,
    title: "Scented Candle Set",
    price: 39.99,
    description: "Set of 3 premium scented candles with natural wax and long-lasting fragrance.",
    category: "home",
    image: "https://images.unsplash.com/photo-1602036598416-5604b2e2a7ed?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 15,
    title: "Leather Backpack",
    price: 189.99,
    description: "Handcrafted leather backpack with laptop compartment and water-resistant finish.",
    category: "clothing",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80"
  },
  {
    id: 16,
    title: "Mechanical Keyboard",
    price: 159.99,
    description: "Premium mechanical keyboard with RGB backlighting and hot-swappable switches.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=800&q=80"
  },
  {
    id: 17,
    title: "Wall Art Print",
    price: 79.99,
    description: "Contemporary wall art print on premium paper with minimalist design.",
    category: "home",
    image: "https://plus.unsplash.com/premium_photo-1692650759123-c59c865a0033?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 18,
    title: "Wool Scarf",
    price: 49.99,
    description: "Soft merino wool scarf with classic pattern and fringed edges.",
    category: "clothing",
    image: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=800&q=80"
  },
  {
    id: 19,
    title: "Bluetooth Speaker",
    price: 129.99,
    description: "Portable bluetooth speaker with 360° sound and 20-hour battery life.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&q=80"
  },
  {
    id: 20,
    title: "Decorative Mirror",
    price: 119.99,
    description: "Round decorative mirror with brass frame and hanging rope.",
    category: "home",
    image: "https://images.unsplash.com/photo-1618220252344-8ec99ec624b1?w=800&q=80"
  }
];

export const categories: Category[] = ['all', 'electronics', 'clothing', 'home'];