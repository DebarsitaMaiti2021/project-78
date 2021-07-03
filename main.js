var reasons = [
    "Debarsita Maiti",
    "Tushar Kanti Maiti",
    "Tanusree Maiti"
   ];
  
  var images = [
    "DEBARSITA.jpg",
    "photo2.jpg",
    "TANUSREE.jpg"
  ];
  
  var i = 0;
  function nextslide(){ 
    if(i>2){
      i=0;
    }
     document.getElementById("reasontext").innerHTML = reasons[i];
    document.getElementById("photo").src = images[i];
    i++;
   
  }
  