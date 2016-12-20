/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BucketlistsService } from './bucketlists.service';

describe('BucketlistsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BucketlistsService]
    });
  });

  it('should ...', inject([BucketlistsService], (service: BucketlistsService) => {
    expect(service).toBeTruthy();
  }));
});
