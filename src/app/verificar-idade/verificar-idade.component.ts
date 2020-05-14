import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verificar-idade',
  templateUrl: './verificar-idade.component.html',
  styleUrls: ['./verificar-idade.component.css'],
})
export class VerificarIdadeComponent implements OnInit {
  constructor() {}

  valor = 18;
  msg: string;
  timeMsg = 'Primeiro';
  ngOnInit(): void {
    this.msgTime(1);
  }

  valorDigitado($event) {
    const inicialValue = +$event.target.value;
    console.log(inicialValue);
    if (inicialValue >= this.valor) {
      this.msg = 'Maior de Idade';
      this.logger(this.msg);
    } else {
      this.msg = 'Menor de Idade';
      this.logger(this.msg);
      this.logger(this.msg);
    }
    this.apagarMsg(inicialValue);
  }

  chamaLogger(validar: boolean) {
    if (validar) {
      this.logger('valido');
      this.logger('valido');
      this.logger('valido');
      this.logger('valido');
      this.logger('valido');
      return;
    } else {
      alert('primeira chamada');
      alert('segunda chamada');
      return;
    }
  }

  apagarMsg(inicialValue: number) {
    return !(inicialValue === 0) ? '' : (this.msg = '');
  }

  logger(msg) {
    console.log(msg);
  }

  msgTime(time: number) {

    setTimeout(() => {
      if(time === 1){
        this.timeMsg = 'Segundo';
      }else{
        this.timeMsg = 'Terceiro';
      }
    }, 1000);
  }
}
