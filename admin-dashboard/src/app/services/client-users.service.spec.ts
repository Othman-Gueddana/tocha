import { TestBed } from '@angular/core/testing';

import { ClientUsersService } from './client-users.service';

describe('ClientUsersService', () => {
  let service: ClientUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
