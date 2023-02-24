import { createPortal } from "react-dom";
import { Component } from "react";

const modalRoot = document.querySelector('#modal-root')
export class Modal extends Component {

    closeModal = (e) => {
        if(e.code === "Escape") this.props.closeModal();
    }
    
    backdropClick = (e) => {
        if(e.target === e.currentTarget) this.props.closeModal();
    }

    componentDidMount() {
        window.addEventListener('keydown', this.closeModal);
    }
    
    componentWillUnmount() {
        window.removeEventListener('keydown', this.closeModal);
    }

    render() {
        const {img, alt} = this.props;
        return createPortal(
        <div className="Overlay" onClick={this.backdropClick}>
            <div className="Modal">
                <img src={img} alt={alt}/>
            </div>
        </div>, modalRoot);
    }
    
}