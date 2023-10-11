import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  buttonText: string = "acess";
  buttonTextArray: string[] = ["buy", "sell"];
  buttonTextObject = {
    item: "add to cart",
  }
}
