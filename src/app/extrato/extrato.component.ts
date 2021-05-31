import { TransferenciaService } from './../services/transferencia.service';
import { Component, OnInit } from '@angular/core';
import { Transferencia } from '../models/transferencia.model';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  transferencias: any[];//Recebe o conteúdo do formulário

  constructor(private service: TransferenciaService) { }

  ngOnInit(): void {

    this.service.todas().subscribe((transferencias: Transferencia[]) => {
      console.table(transferencias);//irá imprimir o array no console em formato de tabela, por ser uma tabela mesmo
      this.transferencias = transferencias;
    });

  }

}
