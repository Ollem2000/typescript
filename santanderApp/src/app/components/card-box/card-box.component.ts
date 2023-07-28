import { Component } from '@angular/core';
import { AccountDataModel } from 'src/app/model/accountDataModel';

@Component({
  selector: 'app-card-box',
  templateUrl: './card-box.component.html',
  styleUrls: ['./card-box.component.css']
})
export class CardBoxComponent {
  accountData: AccountDataModel = {

	name: "Felipe",
	account: {
		agency: "0000",
		number: "00.000000-0",
	},
	card: {
		limit: 0,
		number: "0000",
	}
}
}