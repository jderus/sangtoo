/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { StubService } from './stub.service';

describe('StubService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [StubService]
    });
  });

  it('should ...', inject([StubService], (service: StubService) => {
    expect(service).toBeTruthy();
  }));
});
