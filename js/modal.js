export const Modal = {

    wrapper:document.querySelector('.modal-wrapper'),
    message: document.querySelector('.modal span'),
    buttonClose: document.querySelector('.modal button.close'),
 
    open() {Modal.wrapper.classList.add('open')},
    close() {Modal.wrapper.classList.remove('open')},
   
    }
 

 Modal.buttonClose.onclick = () =>{
    
    Modal.close();
 
 }

window.addEventListener('keydown',teclaEscape);

function teclaEscape(tecla){
if(tecla.key == 'Escape')
{ 
   Modal.close()
}
}


