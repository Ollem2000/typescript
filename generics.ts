function useState<T>(){
	let state: T;
	
	function get(){
		return state;
	}
	
	function set(newValue: T){
		state = newValue;
	}
	
	return {get, set};
}

let newState = useState<string>();
newState.get();
newState.set("Nome");
newState.set(123); //não funcionará

/*
Pode usar qualquer letra para o uso genérico, mas há o padrão opcional:
S = state
T = type
K = key
V = value
E = element
*/