
//square
  document.getElementById('square-button').addEventListener('click', function(){ squareNumber() });

  function squareNumber(){
    var sq= document.getElementById('square-input').value;
    var result = sq * sq;
    document.getElementById('solution').innerHTML = 'The result of squaring the number ' + sq + ' is ' + result;
  }


  //half
  document.getElementById('half-button').addEventListener('click', function(){ halfNumber() });


  function halfNumber(){
    var halfnum = document.getElementById('half-input').value;
    var result = halfnum / 2
    document.getElementById('solution').innerHTML = 'Half of ' + halfnum + ' is ' + result;
  }


//percent

  document.getElementById('percent-button').addEventListener('click', function(){ percentOf() });

  function percentOf(){
    var percent1num = document.getElementById('percent1-input').value;
    var percent2num = document.getElementById('percent2-input').value;
    var result = (percent1num/100) * percent2num
    document.getElementById('solution').innerHTML = result + ' is ' + percent1num + '% ' + ' of ' + percent2num;
  }


//circle

  document.getElementById('area-button').addEventListener('click', function(){ areaOfCircle() });

  function areaOfCircle(){
    var areacirnum = document.getElementById('area-input').value;
    var result = (areacirnum*areacirnum) * 3.14

    document.getElementById('solution').innerHTML = 'The area for a circle with radius ' + areacirnum + ' is ' + result;
  }
