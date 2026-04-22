import { Injectable, inject, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs/operators';
import { mapUserDtoToUser } from '../adapters/user.adapter';
import { User, UserDto } from '../interfaces/user.interface';
import { BaseService } from '../base/base.service';
import { ApiEndpoints } from '../enums/api-endpoints.enum';

@Injectable({
  providedIn: 'root',
})

export class UserService extends BaseService<User> {
  private readonly _usersSignal = toSignal(
    this.http
      .get<UserDto[]>(this.endpoint)
      .pipe(map((dtos) => dtos.map((dto) => mapUserDtoToUser(dto)))),
    { initialValue: [] as User[] },
  );

  readonly users = computed(() => this._usersSignal());
  readonly userCount = computed(() => this.users().length);

  constructor(http: HttpClient) {
    super(http, ApiEndpoints.USERS);
  }
}
