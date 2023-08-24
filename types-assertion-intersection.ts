type User = {
	id: number;
	name: string;
}
type Char = {
	nickname: string;
	level: number;
}

type PlayerInfo = User & Char & {
	health?: 100;
};

let info: PlayerInfo = {
	id: 1,
	name: "nome",
	nickname: "apelido",
	level: 10,
}