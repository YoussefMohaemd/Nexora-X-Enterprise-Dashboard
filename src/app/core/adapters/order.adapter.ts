import { Order, OrderDto } from '../interfaces/order.interface';

export function mapOrderDtoToOrder(dto?: OrderDto): Order {
  const userId = dto?.user_id ?? 'unknown';

  const items = dto?.items ?? [];

  return {
    id: String(dto?.id ?? ''),
    userId: String(userId),

    total: Number(dto?.total ?? 0),
    status: dto?.status ?? 'pending',

    items: items.map(item => ({
      productId: String(item?.product_id ?? ''),
      quantity: Number(item?.quantity ?? 0),
      price: Number(item?.price ?? 0),
    })),

    createdAt: dto?.created_at
      ? new Date(dto.created_at)
      : new Date(0),

    // ✅ UI safe user mapping
    user: {
      name: `User ${userId}`,
      avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(String(userId))}`
    },

    // ✅ safe product mapping (first item only)
    product: {
      name: items.length > 0
        ? `Product ${items[0]?.product_id ?? 'unknown'}`
        : 'No Products'
    }
  };
}