import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { VectorService } from './vector.service';

describe('VectorService', () => {
  let service: VectorService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [VectorService],
    });
    service = TestBed.inject(VectorService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call getVectorData and return data', () => {
    const mockResponse = { success: true, data: [] };

    service.getVectorData().subscribe((data) => {
      expect(data).toEqual(mockResponse);
    });

    const req = httpTestingController.expectOne('http://localhost:3000/api/v1/vector');
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });
});
