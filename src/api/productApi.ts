import { mockProducts } from '../mock';
import type { Product } from '../types';

// Simulating API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function getProducts(): Promise<Product[]> {
    await delay(800); // Simulate network delay
    return mockProducts;
}

export async function getProductById(id: number): Promise<Product | undefined> {
    await delay(800);
    return mockProducts.find(product => product.id === id);
}

export async function getProductsByCategory(category: string): Promise<Product[]> {
    await delay(800);
    return category === 'all'
        ? mockProducts
        : mockProducts.filter(product => product.category === category);
}