import { Injectable, computed } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { BaseService } from '../base/base.service';
import { Order, OrderDto } from '../interfaces/order.interface';
import { ApiEndpoints } from '../enums/api-endpoints.enum';
import { mapOrderDtoToOrder } from '../adapters/order.adapter';

@Injectable({
  providedIn: 'root',
})
export class OrderService extends BaseService<Order> {
  private readonly _ordersSignal = toSignal(
    this.http.get<OrderDto[]>(this.endpoint).pipe(
      map((dtos: any) => (Array.isArray(dtos) ? dtos.map(mapOrderDtoToOrder) : [])),
      catchError((err) => {
        console.error('Orders API failed:', err);
        return of([]);
      }),
    ),
    { initialValue: [] as Order[] },
  );

  readonly orders = computed(() => this._ordersSignal());
  readonly orderCount = computed(() => this.orders().length);

  constructor(http: HttpClient) {
    super(http, ApiEndpoints.ORDERS);
  }
}
