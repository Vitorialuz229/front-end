import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { HttpClientModule } from '@angular/common/http';
import { Product } from '../../interface/product';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-product-read',
  standalone: true,
  imports: [HttpClientModule, CommonModule, MatCardModule, MatTableModule, MatIconModule],
  templateUrl: './product-read.component.html',
  styleUrl: './product-read.component.css',
  providers: [ProductService],
})
export class ProductReadComponent implements OnInit {
  products: Product[] = [];
  displayedColumns: string[] = ['id', 'nome_do_sensor', 'localizacao', 'tipo_de_sensor', 'actions'];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.readProduct();
  }

  readProduct(): void {
    this.productService.read().subscribe({
      next: (data: Product[]) => {
        this.products = data;
        console.log('Produtos carregados com sucesso!');
      },
      error: (error) => {
        console.error('Erro ao carregar produtos:', error);
        this.productService.showMessage('Erro ao carregar produtos');
      }
    });
  }

  editProduct(product: Product): void {
    // Lógica para editar o produto, por exemplo, redirecionar para um formulário de edição
    console.log('Editando produto:', product);
    // Navegar para a página de edição, se aplicável
  }

  deleteProduct(id: number): void {
    // Lógica para deletar o produto
    console.log('Deletar produto com ID:', id);
    // Aqui você poderia chamar um método do ProductService para deletar o produto
  }
}
