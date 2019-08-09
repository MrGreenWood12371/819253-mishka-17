var modalButton = document.querySelectorAll('.purchase-button');
var modalWindow = document.querySelector('.modal-card');

for (var i = 0; i < modalButton.length; i++) {
  modalButton[i].addEventListener('click', function() {
    modalWindow.classList.add('modal-card--show')
  })
}

window.addEventListener('keydown', function(event){
  if (event.keyCode === 27) {
    if(modalWindow.classList.contains('modal-card--show')){
      modalWindow.classList.remove('modal-card--show')
    }
  }
})
