import React from "react";
import Transition from "react-transition-group/Transition";

import "./Modal.css";

const animationTiming = {
  enter: 300,
  exit: 1000
};

const modal = props => {
  return (
    <Transition
      mountOnEnter//igaz 
      unmountOnExit//hamis
      in={props.show} //trigger
      timeout={animationTiming}>
      {/* itt két külömböző időt használ. Értem ezt objektum. */}
      {state => {
        const cssClasses = [
          "Modal",
          state === "entering"
            ? "ModalOpen"
            : state === "exiting" ? "ModalClosed" : null
        ];
        return (
          <div className={cssClasses.join(" ")}>
            {/* css stylhoz csatlakozik így */}
            <h1>A Modal </h1>
            <button className="Button" onClick={props.closed}>
              Dismiss
            </button>
          </div>
        );
      }}
    </Transition>
  );
};

export default modal;