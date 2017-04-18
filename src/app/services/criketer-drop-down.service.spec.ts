import { TestBed, inject } from '@angular/core/testing';
import { CriketerDropDownService } from './criketer-drop-down.service';

describe('CriketerDropDownService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CriketerDropDownService]
    });
  });

  it('should ...', inject([CriketerDropDownService], (service: CriketerDropDownService) => {
    expect(service).toBeTruthy();
  }));
});
