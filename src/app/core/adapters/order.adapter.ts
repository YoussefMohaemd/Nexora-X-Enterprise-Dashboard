import { Order, OrderDto } from '../interfaces/order.interface';

export function mapOrderDtoToOrder(dto?: any): Order {
  const userId = dto?.userId ?? dto?.user_id ?? 'unknown';
  const items = dto?.items ?? [];

  return {
    id: String(dto?.id ?? ''),
    userId: String(userId),

    // 🔥 FIXED: support both formats
    total: Number(dto?.totalPrice ?? dto?.total ?? 0),

    status: dto?.status ?? 'pending',

    items: items.map((item: any) => ({
      productId: String(item?.productId ?? item?.product_id ?? ''),
      quantity: Number(item?.quantity ?? 0),
      price: Number(item?.price ?? 0),
    })),

    // 🔥 FIXED: date naming mismatch
    createdAt: dto?.createdAt ? new Date(dto.createdAt) : new Date(),

    user: dto?.user ?? {
      name: `User ${userId}`,
      avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(userId)}`,
    },

    product: dto?.product ?? {
      name:
        items.length > 0
          ? `Product ${items[0]?.productId ?? 'unknown'}`
          : 'No Products',
    },
  };
}
