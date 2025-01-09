import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'; // Import HttpClientTestingModule
import { VectorService } from './vector.service';

describe('VectorService', () => {
  let service: VectorService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Import HttpClientTestingModule here
      providers: [VectorService],
    });
    service = TestBed.inject(VectorService); // Inject the service
    httpTestingController = TestBed.inject(HttpTestingController); // Inject HttpTestingController
  });

  afterEach(() => {
    httpTestingController.verify(); // Ensure no outstanding requests
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call getVectorData and return data', () => {
    const mockResponse = { success: true, data: [] }; // Mock response data

    service.getVectorData().subscribe((data) => {
      expect(data).toEqual(mockResponse);
    });

    const req = httpTestingController.expectOne('http://localhost:3000/api/v1/vector'); // Expect one HTTP request
    expect(req.request.method).toBe('POST'); // Verify the request method
    req.flush(mockResponse); // Respond with mock data
  });
});