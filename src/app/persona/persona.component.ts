import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.sass']
})
export class PersonaComponent implements OnInit {

  nombre: string;
  apellido: string;

  constructor() { }

  ngOnInit() {
  }

  recibirEvento(e : any){
    this.nombre = e.target.value;
  }

}
