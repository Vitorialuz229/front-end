import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ProductCreateComponent } from '../../product/product-create/product-create.component';
import { Router, RouterOutlet } from '@angular/router';

import { ProductReadComponent } from '../../product/product-read/product-read.component';

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [MatButtonModule, ProductCreateComponent, RouterOutlet, ProductReadComponent],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css',
})
export class CrudComponent {
  constructor(private router: Router) { }

  navigateToProductCreate(): void {
    this.router.navigate(['sensor/create'])
  }
}
