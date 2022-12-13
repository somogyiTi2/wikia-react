import { Fragment } from 'react';
import ReactDOM from 'react-dom'
import classes from './Modal.module.css';

const Backdrop = (props) => {
    return <div className={classes.backdrop}></div>
}

const ModalOverlay = (props) => {
    return (<div className={classes.modal}>
        <div className={classes.content}>{props.children} </div>
    </div>);
};

const portalElement= document.getElementById('overlays');//ITT A MEGEJELÖLÉSE AZ index.html -ben az ID-nak hova

const Modal = (props) => {
return(
    <Fragment>
    {ReactDOM.createPortal(<Backdrop/>, portalElement)/* Amit helyzünk, és hogy hova */}
    {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalElement)}
        {/* <Backdrop/>
        <ModalOverlay>{props.children}</ModalOverlay> */}
    </Fragment>
);
};

export default Modal