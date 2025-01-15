import { Component } from '@angular/core';
import { VectorService } from '../../../core/services/vector/vector.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sda-vectors',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sda-vectors.component.html',
  styleUrls: ['./sda-vectors.component.css'],
})
export class SdaVectorsComponent {
  vectors: { idVectorPlantilla: string; descripcioVector: string; mark: boolean }[] = [];
  errorMessage = '';

  constructor(private vectorService: VectorService) {}

  ngOnInit() {
    this.loadVectors();
  }

  loadVectors() {
    this.vectorService.getVectorData().subscribe({
      next: (response) => {
        if (response.success) {
          this.vectors = response.data.map((vector: any) => ({
            ...vector,
            mark: false,
          }));
        } else {
          this.errorMessage = 'Failed to load vectors.';
        }
      },
      error: () => {
        this.errorMessage = 'An error occurred while fetching vectors.';
      },
    });
  }

  updateVector(index: number, event: Event) {
    const checkbox = event.target as HTMLInputElement;
    this.vectors[index].mark = checkbox.checked;
  }

  completePercentage(): number {
    const totalVectors = this.vectors.length;
    if (totalVectors === 0) {
      return 0;
    }
    const markedCount = this.vectors.filter((vector) => vector.mark).length;
    return Math.round((markedCount / totalVectors) * 100);
  }

  markedVectors(): number {
    return this.vectors.filter((vector) => vector.mark).length;
  }
}


