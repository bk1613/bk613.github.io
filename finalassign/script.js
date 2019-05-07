$(document).ready(function(){
//all the jquery we are writing will go inside of this function
  console.log("this code is loaded and saved");

  $('#btn1').click(function(){
    $('form').slideUp()//grab the element that will be effected, attach the event
  });

  $('#btn2').click(function(){
    $('form').slideDown()
  });
});

document.getElementById("GOW").addEventListener("click", getprice);

function getprice(){
  document.getElementById("godofwar").innerHTML = "God of War $49.99";
  // document.getElementById("godofwar").innerHTML = "$49.99";
}

document.getElementById("DMC").addEventListener("click", getprice1);

function getprice1(){
  document.getElementById("Devilmaycry").innerHTML = "Devil May cry HD collection $39.99";
  // document.getElementById("godofwar").innerHTML = "$49.99";
}


document.getElementById("Dp").addEventListener("click", getprice2);

function getprice2(){
  document.getElementById("Deadpool").innerHTML = "Deapool $29.99";
  // document.getElementById("godofwar").innerHTML = "$49.99";
}

document.getElementById("BA").addEventListener("click", getprice3);

function getprice3(){
  document.getElementById("godofwar").innerHTML = " Batman Arkham $19.99";
  // document.getElementById("godofwar").innerHTML = "$49.99";
}


document.getElementById("DMC5").addEventListener("click", getprice4);

function getprice4(){
  document.getElementById("devil5").innerHTML = "Devil MAy Cry 5 $49.99";
  // document.getElementById("godofwar").innerHTML = "$49.99";
}


document.getElementById("FFXV").addEventListener("click", getprice5);

function getprice5(){
  document.getElementById("finalfantasy").innerHTML = "Final Fantasy XV $49.99";
  // document.getElementById("godofwar").innerHTML = "$49.99";
}


document.getElementById("RAC").addEventListener("click", getprice6);

function getprice6(){
  document.getElementById("Ratandcla").innerHTML = "Ratchet and Clank $49.99";
  // document.getElementById("godofwar").innerHTML = "$49.99";
}


document.getElementById("N:A").addEventListener("click", getprice7);

function getprice7(){
  document.getElementById("Nier").innerHTML = "Nier: Automata $49.99";
  // document.getElementById("godofwar").innerHTML = "$49.99";
}

document.getElementById("U4").addEventListener("click", getprice8);

function getprice8(){
  document.getElementById("uncharted").innerHTML = "Uncharted 4: A thief's end $19.99";
  // document.getElementById("godofwar").innerHTML = "$49.99";
}

document.getElementById("SM").addEventListener("click", getprice9);

function getprice9(){
  document.getElementById("spider").innerHTML = "Spider-Man $49.99";
  // document.getElementById("godofwar").innerHTML = "$49.99";
}

document.getElementById("ACO").addEventListener("click", getprice10);

function getprice10(){
  document.getElementById("Assassin").innerHTML = "Assassins creed Odyssey $59.99";
  // document.getElementById("godofwar").innerHTML = "$49.99";
}


document.getElementById("TLOZ").addEventListener("click", getprice11);

function getprice11(){
  document.getElementById("zelda").innerHTML = "The legend of Zelda: Breath of the wild $49.99";
  // document.getElementById("godofwar").innerHTML = "$49.99";
}


document.getElementById("SMO").addEventListener("click", getprice12);

function getprice12(){
  document.getElementById("mario").innerHTML = "Super Mario Odyssey $49.99";
  // document.getElementById("godofwar").innerHTML = "$49.99";
}

document.getElementById("GTA").addEventListener("click", getprice13);

function getprice13(){
  document.getElementById("Theft").innerHTML = "Grand Theft Auto V $49.99";
  // document.getElementById("godofwar").innerHTML = "$49.99";
}

document.getElementById("MHW").addEventListener("click", getprice14);

function getprice14(){
  document.getElementById("Monsterhunter").innerHTML = "Monster Hunter: World $49.99";
  // document.getElementById("godofwar").innerHTML = "$49.99";
}

document.getElementById("HZD").addEventListener("click", getprice15);

function getprice15(){
  document.getElementById("Horizon").innerHTML = "Horizon Zero Dawn $49.99";
  // document.getElementById("godofwar").innerHTML = "$49.99";
}


document.getElementById("TF2").addEventListener("click", getprice16);

function getprice16(){
  document.getElementById("titan").innerHTML = "Titanfall 2 $19.99";
  // document.getElementById("godofwar").innerHTML = "$49.99";
}



document.getElementById("OW").addEventListener("click", getprice17);

function getprice17(){
  document.getElementById("overwatch").innerHTML = "Overwatch $49.99";
  // document.getElementById("godofwar").innerHTML = "$49.99";
}


document.getElementById("CODAW").addEventListener("click", getprice18);

function getprice18(){
  document.getElementById("advancewarfare").innerHTML = "Call of Duty: Advanced War $49.99";
  // document.getElementById("godofwar").innerHTML = "$49.99";
}



document.getElementById("CODMW").addEventListener("click", getprice19);

function getprice19(){
  document.getElementById("Modernwarfare").innerHTML = "Call of Duty: Modern Warfare $49.99";
  // document.getElementById("godofwar").innerHTML = "$49.99";
}



document.getElementById("DM").addEventListener("click", getprice20);

function getprice20(){
  document.getElementById("doom").innerHTML = "Doom $19.99";
  // document.getElementById("godofwar").innerHTML = "$49.99";
}


document.getElementById("BF4").addEventListener("click", getprice21);

function getprice21(){
  document.getElementById("battlefield").innerHTML = "BattleField 4 $49.99";
  // document.getElementById("godofwar").innerHTML = "$49.99";
}


document.getElementById("H5").addEventListener("click", getprice22);

function getprice22(){
  document.getElementById("halo").innerHTML = "Halo 5 $29.99";
  // document.getElementById("godofwar").innerHTML = "$49.99";
}


document.getElementById("D2").addEventListener("click", getprice23);

function getprice23(){
  document.getElementById("destiny").innerHTML = "Destiny 2 $19.99";
  // document.getElementById("godofwar").innerHTML = "$49.99";
}



document.getElementById("SFV").addEventListener("click", getprice24);

function getprice24(){
  document.getElementById("streetfighter").innerHTML = "Street Fighter V arcade $39.99</p>";
  // document.getElementById("godofwar").innerHTML = "$49.99";
}

document.getElementById("MKX").addEventListener("click", getprice25);

function getprice25(){
  document.getElementById("mortalkombat").innerHTML = "Mortal Kombat X $29.99";
  // document.getElementById("godofwar").innerHTML = "$49.99";
}

document.getElementById("IJ2").addEventListener("click", getprice26);

function getprice26(){
  document.getElementById("Injustice").innerHTML = "Injustice 2 $49.99";
  // document.getElementById("godofwar").innerHTML = "$49.99";
}

document.getElementById("T7").addEventListener("click", getprice27);

function getprice27(){
  document.getElementById("tekken").innerHTML = "Tekken 7 $49.99";
  // document.getElementById("godofwar").innerHTML = "$49.99";
}


document.getElementById("DBF").addEventListener("click", getprice28);

function getprice28(){
  document.getElementById("dragonball").innerHTML = "dragon ball fighterz $49.99";
  // document.getElementById("godofwar").innerHTML = "$49.99";
}


document.getElementById("DOA6").addEventListener("click", getprice29);

function getprice29(){
  document.getElementById("deadoralive").innerHTML = "Dead or Alive 6 $49.99";
  // document.getElementById("godofwar").innerHTML = "$49.99";
}


document.getElementById("KI").addEventListener("click", getprice30);

function getprice30(){
  document.getElementById("killerinstinct").innerHTML = "Killer Instinct $39.99";
  // document.getElementById("godofwar").innerHTML = "$49.99";
}

document.getElementById("SSBU").addEventListener("click", getprice31);

function getprice31(){
  document.getElementById("supersmash").innerHTML = " Super Samsh bros. Ultimate $49.99";
  // document.getElementById("godofwar").innerHTML = "$49.99";
}

// document.getElementById('chat-button').addEventListener('click', function(){ chatting() });

function chatting(){
  var txt = document.getElementById('text-input').value;
  alert(txt);
}

// document.getElementById('square-button').addEventListener('click', function(){ squareNumber() });

// function squareNumber(){
//
//   document.getElementById('solution').innerHTML = 'chat';
// }
