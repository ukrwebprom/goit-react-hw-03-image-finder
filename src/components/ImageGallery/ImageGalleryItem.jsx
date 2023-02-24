import { Modal } from "components/Modal/Modal";
import { Component } from "react";

export class ImageGalleryItem extends Component {
    
    state = {
        showModal:false
    }

    toggleModal = () => {
        this.setState(({showModal}) => {
            return ({showModal: !showModal})
        })
    }

    render() {
        const {image, alt, largeImage} = this.props;
        return (
            <>
            <img src={image} alt={alt} className="ImageGalleryItem-image" onClick={this.toggleModal} />
            {this.state.showModal && <Modal img={largeImage} alt={alt} closeModal={this.toggleModal} />}
            </>
        )
    }
    
}