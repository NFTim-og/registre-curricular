import { NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-side-navigation-bar',
  standalone: true,
  imports: [NgIf],
  templateUrl: './side-navigation-bar.component.html',
  styleUrls: ['./side-navigation-bar.component.css']
})
export class SideNavigationBarComponent {
  isCoursesExpanded = false;

  @Output() navItemSelected = new EventEmitter<string>();

  toggleCourses() {
    this.isCoursesExpanded = !this.isCoursesExpanded;
  }

  selectNavItem(navItem: string) {
    console.log(`Navigation item selected: ${navItem}`);
    this.navItemSelected.emit(navItem); // Emit the selected menu item
  }
}
