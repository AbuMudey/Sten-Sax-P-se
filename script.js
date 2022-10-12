const spelare=document.getElementById("Spelare")
const dator= document.getElementById("Dator")
const resultat=document.getElementById("Resultat")




let data;
let spelsten;
let spelsax;
let spelpase;


function stenar(){
    document.getElementById("Spelare").innerHTML="Sten";
    spelsten;
    datorn();
    return
}

function saxen(){
    document.getElementById("Spelare").innerHTML="Sax";
    spelsax;
    datorn();
    return
}

function pasen(){
    document.getElementById("Spelare").innerHTML="Påse";
    spelpase;
    datorn();
    return
}

function datorn(){
   const random=  Math.floor(Math.random() * 3)+1;
   switch(random){
    case 1:
    data="Sten";
    document.getElementById("Dator").innerHTML="Sten";
    break;

    case 2:
        data="Sax"
        document.getElementById("Dator").innerHTML="Sax";
    break

    case 3:
       data="Påse"
       document.getElementById("Dator").innerHTML="Påse";
    break;
   }  Vinnare();
}

function Vinnare(){
    if(spelsten=="Påse"){
    return document.getElementById("Resultat").innerHTML="Dator";
    }else if(spelsten=="Sax"){
        return document.getElementById("Resultat").innerHTML="Spelaren";
    }
    else if(spelsax=="Påse"){
       return document.getElementById("Resultat").innerHTML="Spelare";
    }else if(spelsax=="Sten"){
        return document.getElementById("Resultat").innerHTML="Dator";
    }
    else if(spelpase=="Sax"){
       return document.getElementById("Resultat").innerHTML="Spelare";
    }else if(spelpase=="Sten"){
       return document.getElementById("Resultat").innerHTML="Dator";
    }
    else if(spelsten=="Sten"){
       return document.getElementById("Resultat").innerHTML="Lika";
    }else if(spelsax=="Sax"){
       return document.getElementById("Resultat").innerHTML="Lika";
    }else if(spelpase=="Påse"){
        return document.getElementById("Resultat").innerHTML="Lika";
    }
    /*
    }else if(datasten<spelsax){
        document.getElementById("Resultat").innerHTML="Dator";
    }else if(datasten<spelpase){
        document.getElementById("Resultat").innerHTML="Spelare";
    }
    else if(datasax<spelpase){
        document.getElementById("Resultat").innerHTML="Dator";
    }else if(datasax>spelsten){
        document.getElementById("Resultat").innerHTML="Spelare";
    }
    else if(datapase>spelsten){
        document.getElementById("Resultat").innerHTML="Dator";
    }else if(datapase>spelsax){
        document.getElementById("Resultat").innerHTML="Spelare";
    }*/
    
}