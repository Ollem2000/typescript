import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-on-init',
  templateUrl: './title-on-init.component.html',
  styleUrls: ['./title-on-init.component.css']
})
export class TitleOnInitComponent implements OnInit {
    title: string = "Titulo gerado no OnInit";

    constructor(){};

    ngOnInit(): void {
      this.title = `Olá, ${this.title}`;
  }
}
