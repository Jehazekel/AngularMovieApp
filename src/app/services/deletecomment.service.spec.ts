import { TestBed } from '@angular/core/testing';

import { DeletecommentService } from './deletecomment.service';

describe('DeletecommentService', () => {
  let service: DeletecommentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeletecommentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
