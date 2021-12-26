import { Component, OnInit } from '@angular/core';
import { RequestsService } from 'src/app/services/requests.service';
import { Produtos } from './../../produtos.model';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent implements OnInit {

  produtos: Produtos[]

  constructor(private getProd: RequestsService) {}

  ngOnInit(): void {

    this.getProd.getProdutos().subscribe(produtos => {
    this.produtos = produtos
    })

  }



}
