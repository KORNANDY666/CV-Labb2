
document.addEventListener('keydown', function(e) {
  if(e.key === '1' , e.key === '3',e.key === '3',e.key === '7') {
      let modal = document.createElement("div");
modal.style.position = "fixed";
modal.style.top = "50%";
modal.style.left = "60%";
modal.style.transform = "translate(-50%, -50%)";
modal.style.backgroundColor = '#f4791f';
modal.style.padding = "100px";
modal.style.border = "10px solid black";
modal.innerHTML = "Vilken jäkla Succe, Grattis jag tar av mig hatten. För du har precis vunnit en miljard!!!.";
document.body.appendChild(modal);

setTimeout(function() {
  modal.remove();
}, 5000);


}

});