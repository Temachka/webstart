var button = document.querySelector('#button');
var modal = document.querySelector('#modal');
var close = document.querySelector('#close');
var myVar;

function myFunction() {
  myVar = setTimeout(function() {
    modal.classList.remove('modal_active');
  }, 5000);
}

function myStopFunction() {
  clearTimeout(myVar);
}

button.addEventListener('click', function() {
  modal.classList.add('modal_active');
});  

close.addEventListener('click', function() {
  modal.classList.remove('modal_active');
});