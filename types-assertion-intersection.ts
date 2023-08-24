type User = {
	id: number;
	name: string;
}
type Char = {
	nickname: string;
	level: number;
}

type PlayerInfo = User & Char & {
	health?: number;
};

let info: PlayerInfo = {
	id: 1,
	name: "nome",
	nickname: "apelido",
	level: 10,
}