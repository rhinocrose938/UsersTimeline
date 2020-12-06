import React from 'react';
import '../App.css';

const Modal = ({ handleClose, show, children}) => {
    /* This is the Modal component child component of Users which gets displayed when a
       Boolean value of show prop is true as the className of showHideClassName css value
       becomes display block from display none. The main body consists of 
       children prop which are passed to it in the parent component Users. 
       The handleClose prop on the button close when button is clicked 
       changes the boolean value of show to false and modal gets closed.
       The props recieved by this component are handleClose, show and children  */ 
    const showHideClassName = show ? "modal display-block" :  "modal display-none";
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          <div className="modal-body mx-auto">{children}
          <button className="btn btn-danger btn-block my-1" onClick={handleClose}>close</button>
          </div>
         </section>
       </div>
    );
  };
  export default Modal;