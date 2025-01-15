import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SdaVectorsComponent } from './sda-vectors.component';
import { VectorService } from '../../../core/services/vector/vector.service';
import { of, throwError } from 'rxjs';
import { CommonModule } from '@angular/common';

describe('SdaVectorsComponent', () => {
  let component: SdaVectorsComponent;
  let fixture: ComponentFixture<SdaVectorsComponent>;
  let mockVectorService: jasmine.SpyObj<VectorService>;

  beforeEach(async () => {
    mockVectorService = jasmine.createSpyObj('VectorService', ['getVectorData']);

    await TestBed.configureTestingModule({
      imports: [CommonModule, SdaVectorsComponent],
      providers: [{ provide: VectorService, useValue: mockVectorService }],
    }).compileComponents();

    fixture = TestBed.createComponent(SdaVectorsComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  describe('loadVectors', () => {
    it('should load vectors successfully', () => {
      const mockResponse = {
        success: true,
        data: [
          { idVectorPlantilla: '1', descripcioVector: 'Test Vector 1' },
          { idVectorPlantilla: '2', descripcioVector: 'Test Vector 2' },
        ],
      };
      mockVectorService.getVectorData.and.returnValue(of(mockResponse));

      component.loadVectors();

      expect(component.vectors.length).toBe(2);
      expect(component.vectors[0].descripcioVector).toBe('Test Vector 1');
      expect(component.vectors[0].mark).toBe(false);
      expect(component.errorMessage).toBe('');
    });

    it('should set errorMessage if loading vectors fails (response.success is false)', () => {
      const mockResponse = { success: false, data: [] };
      mockVectorService.getVectorData.and.returnValue(of(mockResponse));

      component.loadVectors();

      expect(component.vectors.length).toBe(0);
      expect(component.errorMessage).toBe('Failed to load vectors.');
    });

    it('should set errorMessage if the service returns an error', () => {
      mockVectorService.getVectorData.and.returnValue(throwError(() => new Error('Service error')));

      component.loadVectors();

      expect(component.vectors.length).toBe(0);
      expect(component.errorMessage).toBe('An error occurred while fetching vectors.');
    });
  });

  describe('updateVector', () => {
    it('should update the mark value of the vector', () => {
      component.vectors = [
        { idVectorPlantilla: '1', descripcioVector: 'Vector 1', mark: false },
        { idVectorPlantilla: '2', descripcioVector: 'Vector 2', mark: false },
      ];
    
      const event = { target: { checked: true } } as unknown as Event;
    
      component.updateVector(0, event);
    
      expect(component.vectors[0].mark).toBe(true);
    });
  });

  describe('completePercentage', () => {
    it('should return the correct percentage of marked vectors', () => {
      component.vectors = [
        { idVectorPlantilla: '1', descripcioVector: 'Vector 1', mark: true },
        { idVectorPlantilla: '2', descripcioVector: 'Vector 2', mark: false },
        { idVectorPlantilla: '3', descripcioVector: 'Vector 3', mark: true },
      ];

      const percentage = component.completePercentage();

      expect(percentage).toBe(67); // 2/3 = 67%
    });

    it('should return 0 if there are no vectors', () => {
      component.vectors = [];

      const percentage = component.completePercentage();

      expect(percentage).toBe(0);
    });
  });

  describe('markedVectors', () => {
    it('should return the correct number of marked vectors', () => {
      component.vectors = [
        { idVectorPlantilla: '1', descripcioVector: 'Vector 1', mark: true },
        { idVectorPlantilla: '2', descripcioVector: 'Vector 2', mark: false },
        { idVectorPlantilla: '3', descripcioVector: 'Vector 3', mark: true },
      ];

      const marked = component.markedVectors();

      expect(marked).toBe(2);
    });

    it('should return 0 if there are no marked vectors', () => {
      component.vectors = [
        { idVectorPlantilla: '1', descripcioVector: 'Vector 1', mark: false },
        { idVectorPlantilla: '2', descripcioVector: 'Vector 2', mark: false },
      ];

      const marked = component.markedVectors();

      expect(marked).toBe(0);
    });
  });
});


