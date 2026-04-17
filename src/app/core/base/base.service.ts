import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiEndpoints } from '../enums/api-endpoints.enum';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseService<T> {
  protected endpoint: string;

  constructor(
    protected http: HttpClient,
    endpoint: ApiEndpoints
  ) {
    this.endpoint = `${endpoint}`;
  }
}