import { TestBed } from '@angular/core/testing';

import { LtCodemirrorService } from './lt-codemirror.service';

describe('LtCodemirrorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LtCodemirrorService = TestBed.get(LtCodemirrorService);
    expect(service).toBeTruthy();
  });
});
