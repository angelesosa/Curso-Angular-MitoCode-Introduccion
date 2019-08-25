import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-perro',
  templateUrl: './perro.component.html',
  styleUrls: ['./perro.component.sass']
})
export class PerroComponent implements OnInit {

  @Input()
  nombre: string;
  @Output()
  emisor = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  ladrar(){
    this.emisor.emit('guau!')
  }

}
