"use strict";

var txtInputGeheel, txtInputDecimaal;
var btnBevestig;
var divFeedback;

window.addEventListener('load',Initieer);

function Initieer(){
  KoppelElementen();

  GeefStandaardWaarden();

}

function GeefStandaardWaarden(){
  txtInputGeheel.value = "";
  txtInputDecimaal.value = 4,5;
}

function IsGeldigGetal(){
 
}

function KoppelElementen() {
  txtInputGeheel = document.getElementById("txtInputGeheel");
  txtInputDecimaal = document.getElementById("txtInputDecimaal");
  btnBevestig = document.getElementById("btnBevestig");
  divFeedback = document.getElementById("divFeedback");
}

function GeefFeedback(){

}



