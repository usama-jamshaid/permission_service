import { TestBed } from '@angular/core/testing';

import { UserroleService } from './Services/userrole.service';

describe('UserroleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserroleService = TestBed.get(UserroleService);
    expect(service).toBeTruthy();
  });
});
