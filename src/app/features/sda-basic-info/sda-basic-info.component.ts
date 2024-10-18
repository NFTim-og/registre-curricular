import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sda-basic-info',
  standalone: true,
  imports: [],
  templateUrl: './sda-basic-info.component.html',
  styleUrl: './sda-basic-info.component.css'
})
export class SdaBasicInfoComponent {
  @Input() title: string = '';
}
