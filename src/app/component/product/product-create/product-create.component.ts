import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
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
  imports: [MatFormFieldModule, MatCardModule, MatInputModule, MatButtonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.css',
  providers: [ProductService]
})
export class ProductCreateComponent implements OnInit {
  productForm!: FormGroup;

  constructor(private productService: ProductService, private router: Router, private fb: FormBuilder) {
    this.productForm = this.fb.group({
      nome_do_sensor: ['', Validators.required],
      localizacao: ['', Validators.required],
      tipo_de_sensor: ['', Validators.required]
    });
  }

  ngOnInit(): void {

  }

  createProduct(): void {
    const product: Product = this.productForm.value;
    this.productService.create(product)
      .subscribe(() => {
        this.productService.showMessage("Operação realizada com sucesso");
        this.router.navigate(['/sensor']);
      });
  }

  cancel(): void {
    this.router.navigate(['/sensor'])
  }
}
