import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  nombrePerro = 'Firulais';
  mensaje : string;

  recibirLadrido(e : any){
    this.mensaje = e;
  }
}
