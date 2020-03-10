"use strict";

var txtInputGeheel, txtInputDecimaal;
var btnCheckGeheel, btnCheckDecimaal;
var divFeedback;

window.addEventListener('load',Initieer);

function Initieer(){
  KoppelElementen();

  GeefStandaardWaarden();

}


const KoppelElementen = () => {
  txtInputGeheel = document.getElementById("txtInputGeheel");
  txtInputDecimaal = document.getElementById("txtInputDecimaal");
  btnCheckGeheel = document.getElementById("btnCheckGeheel");
  btnCheckDecimaal = document.getElementById("btnCheckDecimaal");
  divFeedback = document.getElementById("divFeedback");
}

const GeefStandaardWaarden = () => {
  txtInputGeheel.value = "";
  txtInputDecimaal.value = 4,5;
}

function IsGeldigGetal(){
 
}


function GeefFeedback(){

}



