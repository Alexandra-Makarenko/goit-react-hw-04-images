import PropTypes from 'prop-types';
import { Modal } from '../Modal/Modal';
import { useState  } from 'react';
import { Image } from './ImageGalleryItem.styled';

export const ImageGalleryItem =({image})=> {  
 
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalOpen = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };
  const modalClose=()=>{   
    setIsModalOpen(false)
  }
 
 
    return (
       <div><a href='image.webformatURL'onClick={modalOpen}>
      <Image src={image.webformatURL} alt={image.id} /></a>
      <div> {isModalOpen && <Modal image={image} onClose={modalClose}><img src={image.largeImageURL} alt={image.id} /></Modal> }</div>
   </div>
    );
  };

  ImageGalleryItem.propTypes = {
    image: PropTypes.shape({
      id:PropTypes.number.isRequired,
      webformatURL:PropTypes.string.isRequired,
      largeImageURL:PropTypes.string.isRequired,
      }).isRequired}