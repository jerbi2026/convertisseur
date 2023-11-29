/**********************       les fonctions de conversions entre les bases (6 fonctions)       ************************** */



function convertBase2versBase10(base2) {
    let chaine_2 = base2.toString();
    let verif = true;

    for (let i = 0; i < chaine_2.length; i++) {
        if (chaine_2[i] !== '0' && chaine_2[i] !== '1') {
            verif = false;
            break;
        }
    }

    if (verif) {
        let base10 = 0;
        for (let j = chaine_2.length - 1; j > -1; j--) {
            base10 = base10 + (parseInt(chaine_2[j], 10) * Math.pow(2, chaine_2.length - 1 - j));
        }
        return base10;
    } else {
        return "Base non valide";
    }
}



function convertBase10versBase2(base10){
    
    let base2 = "";
    if(base10>0){
        while (base10 > 0) {
            base2 = (base10 % 2).toString() + base2;
            base10 = Math.floor(base10 / 2);
        }
        return base2;
    }
    else if(base10==0){
        return "0"
        
    }
    else{
        return "veuillez saisir un entier positive"
    }


}


function convertBase10versBase16(b10){
    base16=""
    let base10 = parseInt(b10,10);
   if(base10>0){
    while(base10>0){
        if(base10%16<10){
            base16 = (base10 % 16).toString() + base16;
        }
        else if(base10%16==10){
            base16="A"+base16;
        }
        else if(base10%16==11){
            base16="B"+base16;
        }
        else if(base10%16==12){
            base16="C"+base16;
        }
        else if(base10%16==13){
            base16="D"+base16;
        }
        else if(base10%16==14){
            base16="E"+base16;
        }
        else if(base10%16==15){
            base16="F"+base16;
        }
        base10 = Math.floor(base10 / 16);



        
    }
    return base16;
   }
   else if(base10==0){
    return "0"
   }
   else{
    return "un entier positive svp"
   }
   

}



function convertBase2versBase16(base2){

    let b10 = convertBase2versBase10(base2);
    let base10 = b10.toString();
    if(base10!="Base non valide"){
        let base16 = convertBase10versBase16(base10);
        return base16;
    }
    else{
        return base10;
    }



}

/*function convertBase16versBase10(base16) {
    const hexTable = {
        'A': 10,
        'B': 11,
        'C': 12,
        'D': 13,
        'E': 14,
        'F': 15
    };

    let base10 = 0;

    for (let j = base16.length - 1; j >= 0; j--) {
        const currentChar = base16[j].toUpperCase();
        const digitValue = hexTable[currentChar] || parseInt(currentChar, 16);

        base10 += digitValue * Math.pow(16, base16.length - 1 - j);
    }

    return base10;
}*/


function convertBase16versBase10(b16) {
    let base16 = b16.toUpperCase();
    let base10 = 0;
    for (let j = base16.length - 1; j > -1; j--) {
        if (base16[j] === "A") {
            base10 += 10 * Math.pow(16, base16.length - 1 - j);
        } else if (base16[j] === "B") {
            base10 += 11 * Math.pow(16, base16.length - 1 - j);
        } else if (base16[j] === "C") {
            base10 += 12 * Math.pow(16, base16.length - 1 - j);
        } else if (base16[j] === "D") {
            base10 += 13 * Math.pow(16, base16.length - 1 - j);
        } else if (base16[j] === "E") {
            base10 += 14 * Math.pow(16, base16.length - 1 - j);
        } else if (base16[j] === "F") {
            base10 += 15 * Math.pow(16, base16.length - 1 - j);
        } else {
            base10 += parseInt(base16[j], 16) * Math.pow(16, base16.length - 1 - j);
        }
    }
    return base10;
}


function convertBase16versBase2(base16){
    let base10 = convertBase16versBase10(base16);
    let base2 = convertBase10versBase2(base10);
    return base2;

}


/**********************       traitement du html       ************************** */

function edit_input(){
    let base1 = document.getElementById("base1");
    let nombre = document.getElementById("nombre");
    if(base1.value=="base 16"){
        
        nombre.type = "text";
        

    }
    else{
        nombre.type = "number";
    }
}


function convert(){
    let base1 = document.getElementById("base1").value;
    let base2 = document.getElementById("base2").value;
    let nombre  = document.getElementById("nombre").value;
    let resultat  = document.getElementById("resultat");
    
    if(base1==base2){
        resultat.textContent="vous avez choisi la meme base";
        
    }
    else{
        if(base1=="base 2" && base2=="base 10"){
            resultat.textContent=convertBase2versBase10(nombre);
        }
        else if(base1=="base 2" && base2=="base 16"){
            resultat.textContent=convertBase2versBase16(nombre);
        }
        else if(base1=="base 10" && base2=="base 2"){
            resultat.textContent=convertBase10versBase2(nombre);
        }
        else if(base1=="base 10" && base2=="base 16"){
            resultat.textContent=convertBase10versBase16(nombre);
        }
        else if(base1=="base 16" && base2=="base 10"){
            resultat.textContent=convertBase16versBase10(nombre);
        }
        else if(base1=="base 16" && base2=="base 2"){
            resultat.textContent=convertBase16versBase2(nombre);
        }


    }



}















