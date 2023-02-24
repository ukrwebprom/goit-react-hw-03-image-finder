import { Component } from "react";
import { ImageGalleryItem } from './ImageGalleryItem';
import { Loader } from '../Loader/Loader';
import { getImages } from "components/Utils/Pixabay";
import { Button } from "../Button/Button";
import { NoImagesMessage } from '../NoImagesMessage/NoImagesMessage';
import { Modal } from "components/Modal/Modal";

export class ImageGallery extends Component {

    state = {
        images: [],
        page: 1,
        loading: false,
        loadMore: false,
        error: false
    }
    handleLoadMore = () =>{
        this.setState(({page}) => ({page: page+1}));
    }

    loadNew = async (request) => {
        this.setState({loading:true});
        const newImg = await getImages(request, 1);

        this.setState({ 
            images: [...newImg.hits], 
            loading:false,
            loadMore: this.state.page * 12 < newImg.totalHits,
            page:1,
            error: newImg.hits.length === 0
        })
    }

    loadMore = async (page) => {
        this.setState({loading:true});
        const newImg = await getImages(this.props.request, page);
        this.setState((state) => {
            return { 
                images: [...state.images, ...newImg.hits], 
                loading:false,
                loadMore: this.state.page * 12 < newImg.totalHits,
                error: newImg.hits.length === 0
             }
        })
    }


    componentDidUpdate(prevProps, prevState) {
        if(prevProps.request !== this.props.request) this.loadNew(this.props.request);
        if(prevState.page !== this.state.page && this.state.page !== 1) this.loadMore(this.state.page);
        window.scrollTo({
            top: document.body.scrollHeight,
            left: 0,
            behavior: 'smooth'
          });
    }


    render() {
        const { loading, images, loadMore, error } = this.state;
        return (
            <>
            
            <ul className="ImageGallery">
              {images.map(item =>
              <li className="ImageGalleryItem" key={item.id}> 
              <ImageGalleryItem image={item.webformatURL} alt={item.tags} largeImage={item.largeImageURL} />  
              </li>)}
            </ul>
            {loadMore && <Button onClick={this.handleLoadMore}/>}
            {error && <NoImagesMessage request={this.props.request} />}
            {loading && <Loader />}

            </>
          );
    }
};
