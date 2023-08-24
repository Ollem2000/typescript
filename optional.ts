type PresetList = {
	id: number;
	name: string;
	situation?: boolean; //ao usar ? em situation?, torno ela um item opcional
}

let userResponse: PresetList = {
	id: 1,
	name: "nome",
}

//útil para utilizar APIs