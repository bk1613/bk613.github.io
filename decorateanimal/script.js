// document.getElementById("animal").addEventListener('click', function(){decorate(event)});


function decorate(event) {
  var deco = document.getElementById("sunglass");
  var x = event.clientX - (deco.offsetWidth / 2);
  var y = event.clientY - (deco.offsetHeight / 2);

  // var oldleft = parsentInt(sun.style.left);
  // var oldtop = parsentInt(sun.style.top);
  // deco.style.left = x;
  // deco.style.top = y;
  // var newleft = oldleft + x;
  // var newtop = oldtop + y;
  deco.style.transform = "translate(" + x + "px," + y + "px)";
  var coords = "X coords: " + x + ", Y coords: " + y;
  document.getElementById("demo").innerHTML = coords;
}

// function myFunction(){
//   // document.getElementById("sunglass").style.left = "50px";
//   document.getElementById("sunglass").style.top = "0.5px";
// }
