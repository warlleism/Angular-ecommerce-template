import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestsService } from 'src/app/services/requests.service';
import { Produtos } from './../../produtos.model';

@Component({
  selector: 'app-vendas',
  templateUrl: './vendas.component.html',
  styleUrls: ['./vendas.component.css']
})
export class VendasComponent implements OnInit {

  produtos: Produtos

  constructor(private vendasServices: RequestsService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.router.snapshot.paramMap.get('id')
    this.vendasServices.getById(id).subscribe(produtos =>{
      this.produtos = produtos
    })
  }

}
