import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ProductCreateComponent } from '../../product/product-create/product-create.component';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [MatButtonModule, ProductCreateComponent, RouterOutlet],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css',
})
export class CrudComponent {
  constructor(private router: Router) { }

  navigateToProductCreate(): void {
    this.router.navigate(['sensor/create'])
  }
}
