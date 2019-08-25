import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-perro',
  templateUrl: './perro.component.html',
  styleUrls: ['./perro.component.sass']
})
export class PerroComponent implements OnInit {

  @Input()
  nombre: string;

  constructor() { }

  ngOnInit() {
  }

}
