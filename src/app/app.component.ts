import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SdaBasicInfoComponent } from "./features/sda-basic-info/sda-basic-info.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SdaBasicInfoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'registre-curricular';
}
