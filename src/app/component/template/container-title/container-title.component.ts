import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-container-title',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './container-title.component.html',
  styleUrl: './container-title.component.css'
})
export class ContainerTitleComponent {

}
