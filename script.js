function loadWaldo(){
  document.getElementById('waldo').src='waldo_final.png'
}
function moveWaldo(){
  alert('Good eye! You found Waldo!')
  var image = document.getElementById('waldo')
  var ranx = Math.floor(Math.random() * (700 - 50 + 1)) + 50
  var rany = Math.random() * 1500
  image.style.top = ranx + 'px'
  image.style.left = rany + 'px'
}
