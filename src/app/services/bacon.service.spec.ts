/* tslint:disable:no-unused-variable */
import { TestBed, async, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { BaconService } from './bacon.service';

describe('BaconService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [BaconService]
    });
  });

  it('should ...', inject([BaconService], (service: BaconService) => {
    expect(service).toBeTruthy();
  }));
});

