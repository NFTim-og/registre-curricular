import { Component, OnInit } from '@angular/core';
import sabersData from '../../../assets/sabers.json';

@Component({
  selector: 'app-sda-sabers',
  templateUrl: './sda-sabers.component.html',
  styleUrls: ['./sda-sabers.component.css']
})
export class SdASabersComponent implements OnInit {
  sabersCategories: any = []; 

  ngOnInit(): void {
    this.sabersCategories = sabersData.categories;
  }
}
