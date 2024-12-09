import { Component, OnInit } from '@angular/core';
import sabersData from '../../../../assets/sabers.json';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sda-sabers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sda-sabers.component.html',
  styleUrls: ['./sda-sabers.component.css']
})
export class SdASabersComponent implements OnInit {
  sabersCategories: any = []; 
  selectedSabers: Set<number> = new Set(); 
  progress: number = 0; 

  ngOnInit(): void {
    this.sabersCategories = sabersData.categories;
  }

  toggleSaberSelection(id: number): void {
    if (this.selectedSabers.has(id)) {
      this.selectedSabers.delete(id);
    } else {
      this.selectedSabers.add(id);
    }
    this.updateProgress();
  }

  updateProgress(): void {
    const totalSabers = this.sabersCategories.reduce((total: number, category: { sabers: any[] }) => {
      return total + category.sabers.length;
    }, 0);
    this.progress = (this.selectedSabers.size / totalSabers) * 100;
  }
  
}
