import { Product, ProductDto } from "../interfaces/product.interface";

export function mapProductDtoToProduct(dto: ProductDto): Product {
  return {
    id: dto.id,
    name: dto.name,
    description: dto.description,
    price: dto.price,
    stock: dto.stock,
    status: dto.status,
    category: dto.category,
    image: dto.image,
    createdAt: dto.created_at,
  };
}