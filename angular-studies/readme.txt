tips
	//app-component.html é apenas um templace; pode apagar, apenas, o conteúdo dentro. É nele que 	entrará os novos componentes.

diretivas
	//maneira como o angular manipula e altera a DOM dinâmicamente
	NgClass
	NgStlyle
	NgModel
	NgTemplate
	NgContent

bindings
	{{valor}}                   //interpolação; template HTML << components ts
	[propriedade] = "valor"     //property binding; template HTML << components ts
	(evento) = "Handler"        //event binding template HTML >> components ts
	[(ngModel)] = "propriedade" //two way data binding; template HTML <<< components ts

?
	@angular/forms

life cycle hooks
	ngOnInit()
	ngOnChanges()
	ngDoCheck()

eventos de check
	...

commands
	ng serve

	ng generate component YOURCOMPONENTNAME
	ng g c YOURCOMPONENTNAME