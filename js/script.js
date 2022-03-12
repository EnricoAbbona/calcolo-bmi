function calcola(){
   var peso= document.getElementById("peso").value;
   var altezza=document.getElementById("altezza").value;

   controlli(peso, altezza);

   var bmi= peso / ((altezza/100) * (altezza/100));
   console.log(bmi);
   document.getElementById("bmi").value= bmi.toFixed(2);
}

function controlli(valori){
    if (peso.value== "" || peso.value<=0){
        alert("ATTENZIONE, il peso non può essere uguale a 0 o minore di 0");
    }

    if(altezza== "" || altezza<=0){
        alert("ATTENZIONE, l'altezza non può essere uguale a 0 o minore di 0");
    }
}