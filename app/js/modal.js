document.querySelectorAll('.modal-show').forEach(function (element) {
    element.onclick = showModal;
});

document.querySelectorAll('.modal-close').forEach(function (element) {
    element.onclick = closeModal;
});

document.querySelectorAll('.modal-wrap').forEach(function (element) {
    //console.log(element);
    element.onclick = closeModalWrap;
});

function showModal() {
    let modalId = this.dataset.modal;
    document.querySelector(modalId).parentElement.classList.remove('hide');
    document.querySelector(modalId).classList.remove('hide');
    document.onkeydown = function (event) {
        if (event.keyCode == 27) {
            document.querySelectorAll('.modal-wrap').forEach(function (element) {
                element.classList.add('hide');
                element.children[0].classList.add('hide');
                document.onkeydown = null;
            });
        }
    }
}

function closeModal() {
    let modalId = this.dataset.modal;
    document.querySelector(modalId).parentElement.classList.add('hide');
    document.querySelector(modalId).classList.add('hide');
    document.onkeydown = null;
}

function closeModalWrap() {
    this.classList.add('hide');
    this.children[0].classList.add('hide');
    document.onkeydown = null;
}

                      /* my cod*/

/*упрощаем код */


let serch = function(alem,atribut){
    document.querySelectorAll(alem).forEach(function(element){
       return element.onclick = atribut;
    })
}


let openMyModal = function(){
    let myModal = this.dataset.my_modal;
    document.querySelector(myModal).style.display = 'block';
 
}

document.onkeydown = function(e){
    if(e.keyCode == 27){
        document.querySelector('#my-modal-open').style.display = 'none';
    }
}

let closeMyModal = function(){
    
    let myModal = this.dataset.my_modal;
    document.querySelector(myModal).style.display = 'none';
    
}

serch(`.my-modal-open`,openMyModal);    
serch(`.my-modal-close-cross`,closeMyModal);
serch(`.my-modal-close`,closeMyModal);


