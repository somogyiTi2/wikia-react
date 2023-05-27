import React from "react";

import "./Modal.css";

const modal = (props => {
  const cssClasses = [
    "Modal",
    props.show==='entering'
     ? "ModalOpen" 
     : props.show ==='exiting' ? 'ModalClosed': null
    // props.show ? "ModalOpen" : "ModalClosed"
  ];

  return (
    <div className={cssClasses.join(' ')}>
      <h1>A Modal {props.show}</h1>
      <button className="Button" onClick={props.closed}>
        Dismiss
      </button>
    </div>
  );
})

export default modal;