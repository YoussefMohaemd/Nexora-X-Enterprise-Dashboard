export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  status: 'active' | 'inactive' | 'out_of_stock';
  category: string;
  image: string;
  createdAt: string;
}

export interface ProductDto {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  status: 'active' | 'inactive' | 'out_of_stock';
  category: string;
  image: string;
  created_at: string;
}


