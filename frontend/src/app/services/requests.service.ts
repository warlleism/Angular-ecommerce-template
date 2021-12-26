import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produtos } from './../produtos.model';

@Injectable({
  providedIn: 'root',
})
export class RequestsService {
  constructor(private http: HttpClient) {}

  url = 'http://localhost:3001/produtos';

  getProdutos(): Observable<Produtos[]> {
    return this.http.get<Produtos[]>(this.url)
  }

  getById(id: string): Observable<Produtos> {
    const url = `${this.url}/${id}`
    return this.http.get<Produtos>(url)
  }
}
