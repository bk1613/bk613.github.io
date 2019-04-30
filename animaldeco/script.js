function decorate(event){
  var x = event.clientX;
  var y = event.clientY;
  var coord = "X coords: " + x + ", Y coords: " + y;
  document.getElementById("demo").innerHTML = coords;
}
