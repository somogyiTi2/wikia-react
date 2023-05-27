import React from "react";
import CSSTransition from "react-transition-group/CSSTransition";

import "./Modal.css";

const animationTiming = {
  enter: 400,
  exit: 1000
};


const modal = props => {
  return (
    <CSSTransition 
      mountOnEnter//igaz 
      unmountOnExit//hamis
      in={props.show}  //trigger
      timeout={animationTiming}
      classNames={{
            enter: '',
            enterActive: 'ModalOpen',
            exit: '',
            exitActive: 'ModalClosed'
        //Nem kell meghatázozni. 
        // apper:
        // appearActive:
      }}>
      {/* kapunk feade-slide-enter -enter-actin -exit -exit-actin  */}
      
          <div className="Modal">
            {/* css stylhoz csatlakozik így */}
            <h1>A Modal </h1>
            <button className="Button" onClick={props.closed}>
              Dismiss
            </button>
          </div>
       
    </CSSTransition>
  );
};

export default modal;