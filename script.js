var parametrosBaixo = {
	cerveja: 4,
}

var parametrosMedios = {
	cerveja: 6,
}

var parametrosAlto = {
	cerveja: 10,
}

function update(){
	var tipo, pessoas, kg;
	
	tipo = document.getElementsByName("tipoDeConsumo");
	pessoas = document.getElementById("pessoas");
	
	if(document.getElementById("tipo1").checked){
		console.log("Tipo 1 meuamigo");
	
	}
	else if(document.getElementById("tipo2").checked){
		console.log("Tipo 2 meuamigo");
	}
	
	else if(document.getElementById("tipo3").checked){
		console.log("Tipo 3 meuamigo");
	}
	else{
		console.log("Algo deu marginalmente errado")
	}

}