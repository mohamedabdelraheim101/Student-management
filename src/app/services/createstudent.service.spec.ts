import { TestBed } from '@angular/core/testing';

import { CreatestudentService } from './createstudent.service';

describe('CreatestudentService', () => {
  let service: CreatestudentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreatestudentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
