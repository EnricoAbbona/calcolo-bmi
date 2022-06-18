function controlli() {
	var peso = document.getElementById("peso").value;
	var altezza = document.getElementById("altezza").value;
	if (peso.value == "" || peso.value <= 0) {
		alert("ATTENZIONE, il peso non può essere uguale a 0 o minore di 0");
	}

	if (altezza == "" || altezza <= 0) {
		alert("ATTENZIONE, l'altezza non può essere uguale a 0 o minore di 0");
	}

	scambio(peso, altezza);
}

function scambio(peso, altezza) {
//  console.log("Sono nella funzione scambio. peso: " + peso + "; altezza: " + altezza);

	for (var i = 0; i <= peso.length; i++) { //Serve per scambiare la virgola con il punto
		if (peso.charAt(i) == ",") {
			peso = peso.replace(",", ".");
			console.log("Peso fixed: " + peso);
		} else {}
	}

	calcola(peso, altezza);
}

function calcola(peso, altezza) {
	var bmi = peso / ((altezza / 100) * (altezza / 100));
	console.log("Il BMI e': " + bmi);
	document.getElementById("bmivalue").value = bmi.toFixed(2);
}

function annulla() {
	peso.value = "";
	altezza.value = "";
	bmivalue.value = "";

}

