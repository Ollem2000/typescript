interface User {
	id: number;
	name: string;
}
interface Char {
	nickname: string;
	level: number;
}

interface UserChar extends User, Char {}