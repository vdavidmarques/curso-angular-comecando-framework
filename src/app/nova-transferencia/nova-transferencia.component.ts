import { Transferencia } from './../models/transferencia.model';
import { TransferenciaService } from './../services/transferencia.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-tranferencia.component.html',
  styleUrls: ['./nova-tranferencia.component.scss'],
})
export class NovaTransferenciaComponent {

  @Output() aoTransferir = new EventEmitter<any>();//Evento que tem a saída dos valores

  valor: number;
  destino: number;

  constructor (private service: TransferenciaService, private router: Router){}

  transferir() {
    console.log('Solicitado nova transferência');

    const valorEmitir: Transferencia = { valor: this.valor, destino: this.destino };

    this.service.adicionar(valorEmitir).subscribe (
      ( resultado) => {
        console.log(resultado);

        this.limparCampos();
        this.router.navigateByUrl('extrato');
      },
      (error) =>  console.error(error)
    );
  }

  limparCampos(){
    this.valor = 0;
    this.destino = 0;

  }
}
