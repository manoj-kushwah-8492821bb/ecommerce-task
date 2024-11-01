export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}

export interface CartItem extends Product {
    quantity: number;
}

export type Category = 'electronics' | 'clothing' | 'home' | 'all';

export interface Review {
    id: string;
    productId: number;
    userId: string;
    userName: string;
    rating: number;
    comment: string;
    createdAt: Date;
}

export interface User {
    id: string;
    email: string;
    isAdmin: boolean;
    name: string;
}