import { Component } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css']
})
export class NgifComponent {
  lista: string[] = []
  constructor(){
    this.lista = [
      "mouse",
      "teclado",
      "cabo",
      "monitor",
    ]
  }
  argument = "false";
}
