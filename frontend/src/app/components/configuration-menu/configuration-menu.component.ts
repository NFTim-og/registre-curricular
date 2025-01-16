import { Component, Renderer2 } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-configuration-menu',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './configuration-menu.component.html',
  styleUrls: ['./configuration-menu.component.css'],
})
export class ConfigurationMenuComponent {
  isDarkMode = false; // Default mode
  selectedLanguage = 'ca'; // Default language

  constructor(private renderer: Renderer2) {}

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;

    // Add or remove the dark-mode class on the <body> element
    if (this.isDarkMode) {
      this.renderer.addClass(document.body, 'dark-mode');
    } else {
      this.renderer.removeClass(document.body, 'dark-mode');
    }
  }

  changeLanguage(): void {
    console.log(
      `Language changed to: ${this.selectedLanguage === 'ca' ? 'Català' : 'Castellano'}`
    );
  }
}
