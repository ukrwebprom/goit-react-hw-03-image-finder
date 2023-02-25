import { Modal } from "components/Modal/Modal";
import { Component } from "react";
import PropTypes from "prop-types";

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

ImageGalleryItem.propTypes = {
    image:PropTypes.string.isRequired,
    alt:PropTypes.string.isRequired,
    largeImage:PropTypes.string.isRequired,
}