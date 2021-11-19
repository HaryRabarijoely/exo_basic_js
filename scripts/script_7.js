$(document).ready(function() {
	function computeAwnser(question){
		console.log(question);
		if (question[question.length-1] == "?"){
			return "Ouais Ouais ... ";
		}else if (question == question.toUpperCase() && question.length > 0){
			return "Pwa, calme-toi un peu ... ";
		}else if(question.includes("fortnite")){
			return "on se fait une partie soum-soum ";
		}else if(question == ""){
			return "tu es en PLS ou quoi !!!";
		}else{
			return "Balek"
		}
	}
	for (;;) {
		question = prompt("Tu ma soulé, vas-y fais annuler et taille toi");
		if (question === null) { return; }
		console.log(computeAwnser(question));
	}
});
