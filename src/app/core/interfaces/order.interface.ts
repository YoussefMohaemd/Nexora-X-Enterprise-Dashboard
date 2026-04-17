export interface OrderDto {
  id: number;
  user_id: number;
  total: number;
  status: string;
  items?: {
    product_id: number;
    quantity: number;
    price: number;
  }[];
  created_at?: string;
}

export interface Order {
  id: string;
  userId: string;
  total: number;
  status: string;
  items: {
    productId: string;
    quantity: number;
    price: number;
  }[];
  createdAt: Date;

  // 🔥 UI required fields
  user: {
    name: string;
    avatar: string;
  };

  product: {
    name: string;
  };
}