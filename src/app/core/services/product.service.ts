import { Injectable, computed } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { mapProductDtoToProduct } from '../adapters/product.adapter';
import { BaseService } from '../base/base.service';
import { Product, ProductDto } from '../interfaces/product.interface';
import { ApiEndpoints } from '../enums/api-endpoints.enum';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends BaseService<Product> {

  private readonly _productsSignal = toSignal(
    this.http.get<ProductDto[]>(this.endpoint).pipe(
      map(dtos => dtos.map(mapProductDtoToProduct))
    ),
    { initialValue: [] as Product[] }
  );

  readonly products = computed(() => this._productsSignal());
  readonly productCount = computed(() => this.products().length);

  constructor(http: HttpClient) {
    super(http, ApiEndpoints.PRODUCTS);
  }
}
