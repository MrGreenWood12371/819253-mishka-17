var modalButton = document.querySelector('.purchase-button');
var modalWindow = document.querySelector('.modal-card');


modalButton.addEventListener('click', function() {
  modalWindow.classList.add('modal-card--show')
})

window.addEventListener('keydown', function(event){
  if (event.keyCode === 27) {
    if(modalWindow.classList.contains('modal-card--show')){
      modalWindow.classList.remove('modal-card--show')
    }
  }
})
