import React, { Component } from "react";

/*FONTOS: MIVEL RÉGI VERZIÓJÚ REACTBAN KÉSZÜLT ÍGY BAJOSAN FUT LE A BÖNGÉSZŐBE
HA F12-alsó gomb működik ha meg bezárod felső*/
import Transition from "react-transition-group/Transition";
//npm install react-transition-group --save

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
  state = {
    modalIsOpen: false,
    showBlock: false
  }

  showModal = () => {
    this.setState({ modalIsOpen: true });
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div className="App">
        <button className="Button" onClick={() => this.setState(prevState => ({ showBlock: !prevState.showBlock }))}>Toggle</button>
        <Transition
          in={this.state.showBlock} /*ez legyen a triger */
          timeout={900}/* időbe mennyi legyen az eltünés */
          mountOnEnter//true
          unmountOnExit//false
        >
          {state => (
            <div
              style={{
                backgroundColor: "red",
                width: 100,
                height: 100,
                margin: "auto",
                //ez maga az animáció: 
                transition: 'opacity 1s ease-out',
                opacity: state === 'exiting' ? 0 : 1
              }}
            >Az állapota: {state}</div>
          )}
        </Transition>
        <br />
        <Transition
          in={this.state.modalIsOpen}
          timeout={300}
          mountOnEnter//true
          unmountOnExit//false
        >
          {state => (
            <Modal show={this.state.modalIsOpen} closed={this.closeModal} />
          )}
        </Transition>
        <br />
        <h1>React Animations</h1>
        {/* {this.state.modalIsOpen ? <Modal show={this.state.modalIsOpen} closed={this.closeModal} /> : null} */}
        {this.state.modalIsOpen ? <Backdrop /> : null}

        <button className="Button" onClick={this.showModal}>Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
