import { TestBed } from '@angular/core/testing';

import { DbMovieService } from './db-movie.service';

describe('DbMovieService', () => {
  let service: DbMovieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbMovieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
