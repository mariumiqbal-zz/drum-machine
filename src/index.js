$(document).ready(function(){
    var soundKeys = {
      "81" : "Q",
      "87" : "W",
      "69" : "E",
      "65" : "A",
      "83" : "S",
      "68" : "D",
      "90" : "Z",
      "88" : "X",
      "67" : "C"
  };

$("button").click(function(){
  let audioId = $('audio',this).attr('id')  //e.g Q  
document.getElementById(audioId).play();
  let id=$(this).attr('id')
 $("#display").text(id)
})

$(document).keydown(function(e){

let audioId= soundKeys[e.keyCode] 
 if(audioId) {    
   document.getElementById(audioId).play();
$("#display").text(document.getElementById(audioId).parentElement.getAttribute('id'))
}
})

})

