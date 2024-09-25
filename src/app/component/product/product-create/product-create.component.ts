import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'

import { ProductService } from '../../service/product.service';
import { Product } from '../../interface/product';

@Component({
  selector: 'app-product-create',
  standalone: true,
  imports: [MatFormFieldModule, MatCardModule, MatInputModule, MatButtonModule, FormsModule, HttpClientModule],
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.css',
  providers: [ProductService]
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    nome_do_sensor: "",
    localizacao: "",
    tipo_de_sensor: ""
  }

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {

  }

  createProduct(): void {
    this.productService.create(this.product)
      .subscribe(() => {
        this.productService.showMessage("Operação realizada com sucesso")
        this.router.navigate(['/sensor'])
      })
  }

  cancel(): void {
    this.router.navigate(['/sensor'])
  }
}
