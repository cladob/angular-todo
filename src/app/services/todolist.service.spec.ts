import { TestBed, inject } from '@angular/core/testing';

import { TODOListService } from './todolist.service';

describe('TODOListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TODOListService]
    });
  });

  it('should be created', inject([TODOListService], (service: TODOListService) => {
    expect(service).toBeTruthy();
  }));
});
