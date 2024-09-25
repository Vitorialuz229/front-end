import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Product } from '../interface/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  baseUrl = 'http://localhost:3000/sensor';
  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl);
  }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'Sair', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msgsucess'],
    });
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product)
      .pipe(map((obj) => obj),
       catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }
}
