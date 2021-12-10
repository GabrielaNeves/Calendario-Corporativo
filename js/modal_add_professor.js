function cadastrar(){
    let modal = document.querySelector('.modal')
    modal.style.display = 'flex';
    let overlay = document.getElementById("overlay");
    overlay.style.display = "flex";
}
function fechar(){
    var modal = document.querySelector('.modal')
    modal.style.display = 'none';
    let overlay = document.getElementById("overlay");
    overlay.style.display = "none";
}


