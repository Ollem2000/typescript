import { Component, OnInit } from '@angular/core';
import { AccountDataModel } from 'src/app/model/accountDataModel';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-card-box',
  templateUrl: './card-box.component.html',
  styleUrls: ['./card-box.component.css']
})
export class CardBoxComponent implements OnInit{

	constructor(private service: CardsService){
		
	}

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
	
	ngOnInit(): void{
		throw new Error('Method not implemented.')
	}
}